import { skeleton } from '@skeletonlabs/tw-plugin';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { join } from 'path';
import type { Config } from 'tailwindcss';

// custom theme
import { skCustomTheme } from './src/styles/sk-custom-theme';

const config: Config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// Append the path to the Skeleton package
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}'),
	],

	theme: {
		extend: {},
	},

	plugins: [
		containerQueries,
		forms,
		typography,
		skeleton({
			themes: {
				custom: [skCustomTheme],
				preset: ['gold-nouveau'],
			},
		}),
	],
};

export default config;
