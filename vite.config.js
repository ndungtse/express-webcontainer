import { defineConfig } from "vite";
import pages from "vite-plugin-pages";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
  root: "./src",
  server: {
    headers: {
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin",
    },
  },
  plugins: [
    pages(),
  ],
});
