<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Method Not Allowed');
}

$rawBody = file_get_contents('php://input');
if (empty($rawBody)) {
    http_response_code(400);
    exit('Empty payload');
}

// Первая строка envelope содержит JSON-заголовок с полем dsn
$lines = explode("\n", $rawBody, 2);
$header = json_decode($lines[0], true);

if (empty($header['dsn'])) {
    http_response_code(400);
    exit('Missing DSN');
}

$parsedDsn = parse_url($header['dsn']);
if (($parsedDsn['host'] ?? '') !== 'app.glitchtip.com') {
    http_response_code(403);
    exit('Forbidden DSN host');
}

$publicKey = $parsedDsn['user'] ?? '';
$projectId = trim($parsedDsn['path'] ?? '', '/');
$targetUrl = "https://app.glitchtip.com/api/{$projectId}/envelope/?sentry_key={$publicKey}&sentry_version=7";

$ch = curl_init($targetUrl);
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $rawBody,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/x-sentry-envelope',
    ],
    CURLOPT_TIMEOUT => 5,
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE) ?: 502;
curl_close($ch);

http_response_code($httpCode);
echo $response;
