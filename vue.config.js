const path = require('path');
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/assets/base.less')]
    }
  },
  configureWebpack:{
    resolve:{
      alias:{
        "@src":path.resolve(__dirname,'src/')
      }
    }
  }
}
