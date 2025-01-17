import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: process.env.PORT || 4173,
    host: '0.0.0.0', // Ensures it binds to all network interfaces
  },
});