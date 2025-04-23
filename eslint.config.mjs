import { configs } from 'eslint-config-hudochenkov';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
	...configs.main,
	eslintConfigPrettier,
	{
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
	},
];
