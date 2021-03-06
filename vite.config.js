import path from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import viteCompression from 'vite-plugin-compression'
import visualizer from 'rollup-plugin-visualizer'
import htmlMinifier from 'vite-plugin-html-minifier-terser'
import copyPlugin from 'vite-plugin-files-copy'
// @ts-ignore
const env = process.argv[process.argv.length - 1]
const isProd = env === 'production'
// https://vitejs.dev/config/
export default defineConfig({
  base: isProd ? '/md-worker-task/' : '/',
  publicDir: 'dist',
  mode: 'development',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // 配置代理
  server: {
    host: '0.0.0.0',
    port: 8080,
    open: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
        additionalData: '@import "./src/style/index.scss";',
      },
    },
  },
  plugins: [
    reactRefresh(),
    // 复制文件
    // @ts-ignore
    copyPlugin({
      patterns: [
        {
          from: './public',
          to: './dist',
        },
      ],
    }),
    // 压缩编译后的html
    // @ts-ignore
    htmlMinifier(),
    isProd &&
      viteCompression({
        // 压缩
        ext: '.br',
        verbose: false,
        threshold: 10 * 1024,
        filter: /\.(js|mjs|json|css)$/i,
        algorithm: 'brotliCompress',
      }),
    isProd &&
      visualizer({
        open: false,
        gzipSize: true,
        brotliSize: true,
        filename: 'dist/report.html',
      }),
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    cssCodeSplit: true,
    sourcemap: false,
    manifest: true,
    brotliSize: true, // 是否启用 brotli 压缩，IE 不支持
    chunkSizeWarningLimit: 300, // chunk 超大警告显示
    terserOptions: {
      // 生产环境移除console
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})
