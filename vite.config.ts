import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgr from 'vite-plugin-svgr'
import { viteMockServe } from 'vite-plugin-mock'
// import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig(configEnv => {
  const { command, mode } = configEnv
  return {
    build: {
      outDir: './doc'
    },
    plugins: [
      react(),
      svgr({ svgrOptions: { icon: true } }),
      viteMockServe({
        mockPath: './mock',
        enable: command === 'serve' && mode === 'mock',
        ignore: fileName => {
          return ['profile'].some(file => fileName.includes(file))
        }
      })
      // Inspect(),
    ],
    server: {
      open: true,
      port: 8080,
      proxy: {
        '/api': 'https://ohhello-server-442044699953.us-central1.run.app'
        // '/api': 'http://192.168.170.185:8080'
      },
      cors: false
    },
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src'),
        assets: path.resolve(__dirname, 'src/assets'),
        styles: path.resolve(__dirname, 'src/assets/styles'),
        images: path.resolve(__dirname, 'src/assets/images'),
        icons: path.resolve(__dirname, 'src/assets/icons'),
        components: path.resolve(__dirname, 'src/components'),
        utils: path.resolve(__dirname, 'src/utils'),
        servers: path.resolve(__dirname, 'src/servers'),
        hooks: path.resolve(__dirname, 'src/hooks')
      }
    },
    css: {
      postcss: {
        plugins: [tailwindcss, autoprefixer]
      },
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler', // or "modern", "legacy"
          importers: [
            // ...
          ]
        }
      }
    }
  }
})
