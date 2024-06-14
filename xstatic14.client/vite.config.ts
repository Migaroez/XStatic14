import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts", // Entrypoint file (registers other manifests)
      formats: ["es"],
      fileName: 'xstatic14',
    },
    outDir: '../XStatic14/wwwroot', // your web component will be saved to the RCL project location and the RCL sets the path as App_Plugins/XStatic14
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      external: [/^@umbraco/],
    },
  },
});
