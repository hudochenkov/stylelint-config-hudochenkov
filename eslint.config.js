import { configs } from 'eslint-config-hudochenkov';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
	...configs.main,
	{
		rules: {
			'import/no-default-export': 'off',
		},
	},
	eslintConfigPrettier,
	{
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
	},
];
