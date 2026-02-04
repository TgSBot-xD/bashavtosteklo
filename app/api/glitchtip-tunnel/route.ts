import { NextRequest, NextResponse } from 'next/server';

function parseDsn(dsn: string) {
  try {
    const url = new URL(dsn);
    return {
      host: url.host,
      projectId: url.pathname.replace('/', ''),
      publicKey: url.username,
    };
  } catch {
    return null;
  }
}

export async function POST(request: NextRequest) {
  const dsn = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

  if (!dsn) {
    return NextResponse.json({ error: 'DSN not configured' }, { status: 500 });
  }

  const parsed = parseDsn(dsn);
  if (!parsed) {
    return NextResponse.json({ error: 'Invalid DSN format' }, { status: 500 });
  }

  const { host, projectId, publicKey } = parsed;

  try {
    const body = await request.text();

    // Проверяем валидность envelope
    try {
      JSON.parse(body.split('\n')[0]);
    } catch {
      return NextResponse.json({ error: 'Invalid envelope' }, { status: 400 });
    }

    const url = `https://${host}/api/${projectId}/envelope/?sentry_key=${publicKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-sentry-envelope' },
      body,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`GlitchTip error: ${response.status} - ${errorText}`);
      return NextResponse.json({ error: errorText }, { status: response.status });
    }

    return NextResponse.json({ status: 'ok' });
  } catch (error) {
    console.error('GlitchTip tunnel error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 },
    );
  }
}
