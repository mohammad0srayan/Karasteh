import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: './',
  plugins: [tailwindcss()],
  server: {
    port: 5174,
  },
  build: {
    target: ['es2018', 'safari14', 'ios14'],
    polyfillModulePreload: false,
    cssTarget: 'safari14',
    minify: 'terser',
    terserOptions: {
      safari10: true,
      compress: {
        drop_console: false,
        drop_debugger: false,
      }
    },
    rollupOptions: {
      output: {
        manualChunks: undefined,
      }
    }
  },
  esbuild: {
    target: 'es2018',
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2018',
    },
  },
  define: {
    global: 'globalThis',
  },
});