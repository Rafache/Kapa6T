import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    host: process.env.HOST || '192.168.1.10',
    port: 5174,
    allowedHosts: ['.aubox.chem1.fr'],
    hmr: {
      clientPort: 443,
    },
  },
  preview: {
    host: process.env.HOST || '192.168.1.10',
    port: 5174,
    allowedHosts: ['.aubox.chem1.fr'],
  },
});
