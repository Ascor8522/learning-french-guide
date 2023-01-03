import mdx from "@mdx-js/rollup";
import preact from "@preact/preset-vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		tsconfigPaths(),
		preact(),
		mdx({
			providerImportSource: "@mdx-js/preact"
		}),
	]
});
