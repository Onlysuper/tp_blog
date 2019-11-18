const path = require('path');
module.exports = {
  devServer:{
    port: 8089,
  },
 
  configureWebpack:{
    resolve:{
      alias:{
        "@src":path.resolve(__dirname,'src/')
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/assets/base.less')]
    }
  }
}
