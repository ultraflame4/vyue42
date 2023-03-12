import {fileURLToPath, URL} from 'node:url'
import dts from 'vite-plugin-dts'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        dts({
            include: ['src/components',"src/index.ts"],
            skipDiagnostics: false,
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "vyue42"
        },
        outDir: "./lib",
        cssCodeSplit: true,
        rollupOptions: {
            external: ["vue", "vue-router"],
            output: {
                globals: {
                    vue: "Vue"
                }
            }
        }
    }

})
