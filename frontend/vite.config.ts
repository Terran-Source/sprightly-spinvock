import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { defineConfig } from 'vitest/config';

const isProd = process.env.NODE_ENV === 'production';
const getPort = () => {
	if (process.env.WAILS_VITE_PORT) return Number(process.env.WAILS_VITE_PORT);
	return undefined;
};
const port = getPort();
// console.info({ port });
// console.info({ env: process.env });

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
	preview: {
		port,
		strictPort: undefined !== port,
	},
	server: {
		port: port,
		strictPort: undefined !== port,
	},
});
