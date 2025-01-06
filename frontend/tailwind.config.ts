import type { Config } from 'tailwindcss';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [forms, containerQueries]
} satisfies Config;
