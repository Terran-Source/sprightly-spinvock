import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { defineConfig } from 'vitest/config';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
	plugins: [
		sveltekit(),
		paraglide({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
		}),
		...(isProd ? [purgeCss()] : []),
	],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
	},
});
