import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/pic-some/",
  plugins: [react({ jsxRuntime: "automatic", fastRefresh: true })],
  mode: "development",
  build: {
    minify: false,
  },
});
