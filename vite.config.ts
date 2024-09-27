import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'dist',
    },
    plugins: [react()],
    server: {
      open: true,
      port: 3210,
    },
  };
});