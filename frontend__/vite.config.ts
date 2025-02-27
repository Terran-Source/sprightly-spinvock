import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

const getPort = () => {
	if (process.env.WAILS_VITE_PORT) return Number(process.env.WAILS_VITE_PORT);
	return undefined;
};
const port = getPort();

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	preview: {
		port,
		strictPort: undefined !== port,
	},
	server: {
		port: port,
		strictPort: undefined !== port,
	},
});
