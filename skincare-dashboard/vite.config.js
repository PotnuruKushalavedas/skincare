import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT for GitHub Pages: base must equal "/<your-repo-name>/"
// e.g. if your repo is https://github.com/yourname/skincare-dashboard
// then base should be "/skincare-dashboard/"
export default defineConfig({
  plugins: [react()],
  base: "/skincare-dashboard/",
});
