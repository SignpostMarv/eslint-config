import config from './javascript.js';
import typescript_eslint from 'typescript-eslint';

export default [
	...config,
	...typescript_eslint.configs.recommendedTypeChecked,
];
