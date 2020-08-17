const { createProxyMiddleware } = require('http-proxy-middleware');

// 代理配置
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3000',   // 目标服务器
      changeOrigin: true
    })
  );
};