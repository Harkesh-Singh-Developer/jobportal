import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import fs from "fs-extra";

export default defineConfig({
  plugins: [react()],
  base: "/", // Ensure correct base path
  publicDir: "public", // Vite will copy 'public' files into 'dist' during build
  build: {
    outDir: "dist", // Ensures all files go inside dist
  },
  server: {
    host: true,
    port: 5173,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});

// Manually copy static assets to `dist/assets/`
fs.copySync("public/assets", "dist/assets");
console.log("✔ Static assets copied to dist/assets/");
