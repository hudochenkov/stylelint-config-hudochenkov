module.exports = {
	plugins: ['stylelint-scss'],
	rules: {
		'scss/dollar-variable-empty-line-before': [
			'always',
			{
				except: ['first-nested', 'after-dollar-variable'],
				ignore: ['after-comment'],
				severity: 'warning',
			},
		],
		'scss/dollar-variable-colon-newline-after': ['always-multi-line', { severity: 'warning' }],
		'scss/dollar-variable-colon-space-after': ['always-single-line', { severity: 'warning' }],
		'scss/dollar-variable-colon-space-before': ['never', { severity: 'warning' }],
	},
};
