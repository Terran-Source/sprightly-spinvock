import { Config } from 'stylelint';

const config: Config = {
	extends: ['stylelint-config-recommended'],
	rules: {
		indentation: 2,
		'string-quotes': 'single',
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'layer'],
			},
		],
		'declaration-block-trailing-semicolon': null,
		'no-descending-specificity': [
			true,
			{
				ignore: ['selectors-within-list'],
			},
		],
		'no-invalid-double-slash-comments': true,
		'block-no-empty': null,
		'selector-pseudo-class-no-unknown': null,
		'declaration-colon-newline-after': null,
	},
};

export default config;
