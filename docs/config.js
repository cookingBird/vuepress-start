const path = require('path');
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@images': path.resolve(__dirname, './public/images'),
      },
    },
  },
};
