import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import { defineConfig } from "vite";
// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": {},
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
    },
  },
});
