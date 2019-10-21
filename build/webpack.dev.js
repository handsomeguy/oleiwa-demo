module.exports = {
    configureWebpack: {
      mode: 'development',
      entry: {
          app:'./src/main.js'
      },
      devtool: 'eval',
      node: {
          setImmediate: false,
          process: 'mock',
          fs: 'empty',
          net: 'empty',
          tls: 'empty',
          child_process: 'empty'
      },
    },
    devServer: {
      disableHostCheck: true,
      https:false,
      open: true,
    },
   
}