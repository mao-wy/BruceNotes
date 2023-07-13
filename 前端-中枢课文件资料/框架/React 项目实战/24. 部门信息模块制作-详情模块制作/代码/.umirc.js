import { defineConfig } from 'umi';
const { resolve } = require('path');

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  mock: false,
  fastRefresh: {},
  dva: { immer: true },
  devtool: 'eval',
  antd: {},
  ignoreMomentLocale: true,
  dynamicImport: {
    loading: '@/components/Loading',
  },
  // umi3 comple node_modules by default, could be disable
  alias: {
    api: resolve(__dirname, './src/servicer/'),
    components: resolve(__dirname, './src/components'),
    common: resolve(__dirname, './src/common'),
    staticList: resolve(__dirname, './src/staticList'),
    hook: resolve(__dirname, './src/hook'),
    // config: resolve(__dirname, './src/utils/config'),
    // themes: resolve(__dirname, './src/themes'),
    utils: resolve(__dirname, './src/utils'),
  },
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:7001',
      changeOrigin: true,
    },
  },
});
