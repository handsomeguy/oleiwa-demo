const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
module.exports = {
      outputDir:"dist",
      configureWebpack:(config)=>{
          
          // console.log(config.plugins)
          if(config.plugins && config.plugins instanceof Array){
            let a  = config.plugins.filter((item,index)=>{
              return !(item instanceof HtmlWebpackPlugin) && item.constructor.name !== "PreloadPlugin"
                && item.constructor.name !== "NamedChunksPlugin" && item.constructor.name !== "OptimizeCssnanoPlugin"
                && item.constructor.name !== "HashedModuleIdsPlugin"&& item.constructor.name !== "CaseSensitivePathsPlugin"
                && item.constructor.name !== "FriendlyErrorsWebpackPlugin"
            })
          }
          // console.log(config.plugins)
          return{
            mode: 'production',
            entry: {
                app:'./src/index.js'
            },
            devtool: 'source-map',
            node: {
                setImmediate: false,
                process: 'mock',
                fs: 'empty',
                net: 'empty',
                tls: 'empty',
                child_process: 'empty'
            },
            output: {
                filename: 'oleiwa.js',
                publicPath: '/',
                // globalObject: 'this',
                chunkFilename:"[name].oleiwa.js",
                libraryTarget:"umd"
            },
          }
      },
      chainWebpack: config => {
          // css output config
          let miniCssExtractPlugin = new MiniCssExtractPlugin(
              {
                  filename: 'oleiwa.css',
                  chunkFilename: 'oleiwa.css'
              }
          )
          config.plugin('extract-css').use(miniCssExtractPlugin)
      },
}