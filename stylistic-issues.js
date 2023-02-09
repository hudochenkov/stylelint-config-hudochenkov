module.exports = {
	rules: {
		'at-rule-empty-line-before': [
			'always',
			{
				except: ['first-nested'],
				ignore: ['after-comment', 'blockless-after-same-name-blockless'],
				severity: 'warning',
			},
		],
		'color-hex-length': ['short', { severity: 'warning' }],
		'comment-whitespace-inside': ['always', { severity: 'warning' }],
		'custom-property-empty-line-before': [
			'always',
			{
				except: ['after-custom-property', 'first-nested'],
				ignore: ['after-comment'],
				severity: 'warning',
			},
		],
		'declaration-empty-line-before': [
			'always',
			{
				except: ['first-nested', 'after-declaration'],
				ignore: ['after-comment'],
				severity: 'warning',
			},
		],
		'font-family-name-quotes': ['always-unless-keyword', { severity: 'warning' }],
		'function-name-case': ['lower', { severity: 'warning' }],
		'function-url-quotes': ['always', { severity: 'warning' }],
		'length-zero-no-unit': [true, { ignore: ['custom-properties'], severity: 'warning' }],
		'no-irregular-whitespace': [true, { severity: 'error' }],
		'rule-empty-line-before': [
			'always',
			{ except: ['first-nested'], ignore: ['after-comment'], severity: 'warning' },
		],
		'selector-attribute-quotes': ['always', { severity: 'warning' }],
		'selector-pseudo-element-colon-notation': ['double', { severity: 'warning' }],
		'selector-type-case': ['lower', { severity: 'warning' }],
		'value-keyword-case': ['lower', { severity: 'warning' }],
	},
};
