/** @format */

import esbuildSvelte from "esbuild-svelte"
import sveltePreprocess from "svelte-preprocess"
import htmlPlugin from "@chialab/esbuild-plugin-html"
import type {BuildOptions} from "esbuild"

export const buildOptions: BuildOptions = {
	entryPoints: ["./src/index.html"],
	minify: false,
	banner: {
		js: `/* https://github.com/benjamingwynn/tetromino */`,
		css: `/* https://github.com/benjamingwynn/tetromino */`,
	},
	outdir: "dist",
	assetNames: "assets/[name]-[hash]",
	chunkNames: "[ext]/[name]-[hash]",
	bundle: true,
	loader: {
		".ts": "ts",
		".woff": "file",
		".woff2": "file",
		".ttf": "file",
		".gif": "file",
		".png": "file",
		".svg": "dataurl",
	},
	plugins: [
		htmlPlugin(),
		// @ts-expect-error
		esbuildSvelte({
			// @ts-expect-error
			preprocess: sveltePreprocess(),
			compilerOptions: {},
		}),
	],
	define: {DEV: "false"},
}
