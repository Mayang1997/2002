module.exports = {
    devServer: {
      proxy: {
        // 代理，转发
        '/api': {
          target: 'http://localhost:3000',
          ws: true,
          changeOrigin: true
        }
      }
    }
  }
  