import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './src', // if your main entry files are inside `src`
  plugins: [react()],
  build: {
    outDir: '../dist', // relative to root, where the build goes
  },
});
