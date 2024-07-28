import { resolve } from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [eslint()],
  build: {
    outDir: './dist',
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'index',
      fileName: (format) => `index.${format}.js`,
      formats: ['cjs', 'es'],
    },
  },
});
