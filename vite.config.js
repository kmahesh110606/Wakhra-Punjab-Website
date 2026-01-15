import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  // For GitHub Pages, base must be "/<repo-name>/".
  // Locally (dev), base should stay "/".
  const base =
    env.VITE_BASE || (mode === "production" ? "/Wakhra-Punjab-Website/" : "/");

  return {
    plugins: [react()],
    base,
  };
});
