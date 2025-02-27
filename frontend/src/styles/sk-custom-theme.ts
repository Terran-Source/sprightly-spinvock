import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const skCustomTheme: CustomThemeConfig = {
	name: 'sk-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `"Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
		'--theme-font-family-heading': `"Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '253 245 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': 'var(--color-error-900)',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #76B041
		'--color-primary-50': '234 243 227', // #eaf3e3
		'--color-primary-100': '228 239 217', // #e4efd9
		'--color-primary-200': '221 235 208', // #ddebd0
		'--color-primary-300': '200 223 179', // #c8dfb3
		'--color-primary-400': '159 200 122', // #9fc87a
		'--color-primary-500': '118 176 65', // #76B041
		'--color-primary-600': '106 158 59', // #6a9e3b
		'--color-primary-700': '89 132 49', // #598431
		'--color-primary-800': '71 106 39', // #476a27
		'--color-primary-900': '58 86 32', // #3a5620
		// secondary | #ff8811
		'--color-secondary-50': '255 237 219', // #ffeddb
		'--color-secondary-100': '255 231 207', // #ffe7cf
		'--color-secondary-200': '255 225 196', // #ffe1c4
		'--color-secondary-300': '255 207 160', // #ffcfa0
		'--color-secondary-400': '255 172 88', // #ffac58
		'--color-secondary-500': '255 136 17', // #ff8811
		'--color-secondary-600': '230 122 15', // #e67a0f
		'--color-secondary-700': '191 102 13', // #bf660d
		'--color-secondary-800': '153 82 10', // #99520a
		'--color-secondary-900': '125 67 8', // #7d4308
		// tertiary | #17BEBB
		'--color-tertiary-50': '220 245 245', // #dcf5f5
		'--color-tertiary-100': '209 242 241', // #d1f2f1
		'--color-tertiary-200': '197 239 238', // #c5efee
		'--color-tertiary-300': '162 229 228', // #a2e5e4
		'--color-tertiary-400': '93 210 207', // #5dd2cf
		'--color-tertiary-500': '23 190 187', // #17BEBB
		'--color-tertiary-600': '21 171 168', // #15aba8
		'--color-tertiary-700': '17 143 140', // #118f8c
		'--color-tertiary-800': '14 114 112', // #0e7270
		'--color-tertiary-900': '11 93 92', // #0b5d5c
		// success | #70e000
		'--color-success-50': '234 250 217', // #eafad9
		'--color-success-100': '226 249 204', // #e2f9cc
		'--color-success-200': '219 247 191', // #dbf7bf
		'--color-success-300': '198 243 153', // #c6f399
		'--color-success-400': '155 233 77', // #9be94d
		'--color-success-500': '112 224 0', // #70e000
		'--color-success-600': '101 202 0', // #65ca00
		'--color-success-700': '84 168 0', // #54a800
		'--color-success-800': '67 134 0', // #438600
		'--color-success-900': '55 110 0', // #376e00
		// warning | #FFC914
		'--color-warning-50': '255 247 220', // #fff7dc
		'--color-warning-100': '255 244 208', // #fff4d0
		'--color-warning-200': '255 242 196', // #fff2c4
		'--color-warning-300': '255 233 161', // #ffe9a1
		'--color-warning-400': '255 217 91', // #ffd95b
		'--color-warning-500': '255 201 20', // #FFC914
		'--color-warning-600': '230 181 18', // #e6b512
		'--color-warning-700': '191 151 15', // #bf970f
		'--color-warning-800': '153 121 12', // #99790c
		'--color-warning-900': '125 98 10', // #7d620a
		// error | #AE2012
		'--color-error-50': '243 222 219', // #f3dedb
		'--color-error-100': '239 210 208', // #efd2d0
		'--color-error-200': '235 199 196', // #ebc7c4
		'--color-error-300': '223 166 160', // #dfa6a0
		'--color-error-400': '198 99 89', // #c66359
		'--color-error-500': '174 32 18', // #AE2012
		'--color-error-600': '157 29 16', // #9d1d10
		'--color-error-700': '131 24 14', // #83180e
		'--color-error-800': '104 19 11', // #68130b
		'--color-error-900': '85 16 9', // #551009
		// surface | #1565c0
		'--color-surface-50': '220 232 246', // #dce8f6
		'--color-surface-100': '208 224 242', // #d0e0f2
		'--color-surface-200': '197 217 239', // #c5d9ef
		'--color-surface-300': '161 193 230', // #a1c1e6
		'--color-surface-400': '91 147 211', // #5b93d3
		'--color-surface-500': '21 101 192', // #1565c0
		'--color-surface-600': '19 91 173', // #135bad
		'--color-surface-700': '16 76 144', // #104c90
		'--color-surface-800': '13 61 115', // #0d3d73
		'--color-surface-900': '10 49 94', // #0a315e
	},
};
