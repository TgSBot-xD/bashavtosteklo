import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import eslintPrettier from 'eslint-plugin-prettier';
import sonar from 'eslint-plugin-sonarjs';
import unicorn from 'eslint-plugin-unicorn';
import noSecrets from 'eslint-plugin-no-secrets';
import boundaries from 'eslint-plugin-boundaries';

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	// Override default ignores of eslint-config-next.
	globalIgnores([
		// Default ignores of eslint-config-next:
		'.next/**',
		'out/**',
		'build/**',
		'next-env.d.ts',
		'node_modules',
	]),
	{
		plugins: {
			'@sonar': sonar,
			'@unicorn': unicorn,
			'@noSecrets': noSecrets,
			'@boundaries': boundaries,
			'@eslintPrettier': eslintPrettier,
		},
		rules: {
			'@unicorn/better-regex': 'warn',
			'@noSecrets/no-secrets': 'error',
			'@boundaries/element-types': [
				2,
				{
					default: 'disallow',
					rules: [
						{
							from: 'controllers',
							allow: ['models', 'views'],
						},
						{
							from: 'views',
							allow: ['models'],
						},
						{
							from: 'models',
							disallow: ['*'],
						},
					],
				},
			],
		},
		settings: {
			'boundaries/elements': [
				{
					type: 'controllers',
					pattern: 'controllers/*',
				},
				{
					type: 'models',
					pattern: 'models/*',
				},
				{
					type: 'views',
					pattern: 'views/*',
				},
			],
		},
	},
]);

export default eslintConfig;
