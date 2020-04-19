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
		'selector-max-empty-lines': [0, { severity: 'warning' }],
		'selector-max-id': [0, { severity: 'error' }],
		'selector-no-qualifying-type': [true, { severity: 'error' }],
		'media-feature-name-no-vendor-prefix': [true, { severity: 'warning' }],
	},
};
