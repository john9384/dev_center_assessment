import { defineConfig } from "vite"
import reactRefresh from "@vitejs/plugin-react"
import svgrPlugin from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: "REACT_APP_",
  server: {
    port: 3000,
  },
  define: {
    "process.env": process.env,
  },
  resolve: {
    alias: {
      src: "/src",
      pages: "/src/pages",
      assets: "/src/assets",
      components: "/src/components",
      styles: "/src/styles",
      utils: "/src/utils",
      store: "/src/store",
    },
  },
  build: {
    outDir: "build",
  },
  plugins: [
    reactRefresh(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
})
