module.exports = {
	rules: {
		'function-url-no-scheme-relative': [true, { severity: 'warning' }],
		'shorthand-property-no-redundant-values': [true, { severity: 'warning' }],
		'value-no-vendor-prefix': [true, { severity: 'warning' }],
		'property-no-vendor-prefix': [true, { severity: 'warning' }],
		'declaration-no-important': [true, { severity: 'error' }],
		'selector-no-vendor-prefix': [true, { severity: 'warning' }],
		'at-rule-no-vendor-prefix': [true, { severity: 'warning' }],
		'no-unknown-animations': [true, { severity: 'error' }],
		'time-min-milliseconds': [100, { severity: 'warning' }],
		'declaration-block-no-redundant-longhand-properties': null,
		'selector-max-type': [0, { severity: 'error' }],
		'selector-max-id': [0, { severity: 'error' }],
		'selector-no-qualifying-type': [true, { severity: 'error' }],
		'media-feature-name-no-vendor-prefix': [true, { severity: 'warning' }],
		'color-function-notation': ['modern', { severity: 'warning' }],
		'declaration-property-value-disallowed-list': [
			{
				// Most of the time it produces issues in UI
				// https://blog.kizu.dev/never-use-overflow-scroll/
				'/^overflow(-(x|y|inline|block))?$/i': /\bscroll\b/i,
			},
			{
				severity: 'warning',
				message:
					'Use auto or hidden instead of scroll. Most of the time scroll produces issues in UI. https://blog.kizu.dev/never-use-overflow-scroll/',
			},
		],
	},
};
