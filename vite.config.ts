import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    hmr: {
      overlay: false, // ou false para desativar o overlay de erro
    },
  },
});
