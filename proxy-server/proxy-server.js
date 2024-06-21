const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Setup proxy middleware
const apiProxy = createProxyMiddleware({
  target: 'http://localhost:8080',  
  changeOrigin: true,
  pathRewrite: {
    '^/api': '',  
  },
});

app.use('/api', apiProxy);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
