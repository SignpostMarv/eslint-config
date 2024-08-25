import config from './index.js';
import parser from '@typescript-eslint/parser';

export default [
	{
		languageOptions: {
			parser,
			parserOptions: {
				project: ['./tsconfig.eslint.json']
			}
		}
	},
	...config,
	{
		files: [
			'./eslint.config.mts',
			'./**/*.ts',
		],
		ignore: [
			'./**/*.js',
		],
	},
];
