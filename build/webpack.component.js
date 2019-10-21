const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');
const path = require("path");
var nodeExternals = require('webpack-node-externals');
// const TerserJSPlugin = require('terser-webpack-plugin')

// 读取components文件夹下的所有文件
const fs = require('fs');
const items = fs.readdirSync('./components');
const dirs = items.filter(item => {
  return fs.statSync(path.resolve('./components', item)).isDirectory()
})
const entryHash = {}
if(dirs.length > 0){
  dirs.forEach(ele=>{
    //   css不作处理
    if(ele !== "theme-chalk"){
        entryHash[ele] = `./components/${ele}/index.js`
    }
  })
}

// 不打包第三方模块内容
var externals = [Object.assign({
  vue: 'vue'
}), nodeExternals()];


module.exports = {
      mode: 'production',
      entry: entryHash,
      output: {
          filename: '[name].js',
          path: path.resolve(__dirname, '../dist'),
          publicPath: '/',
          libraryTarget: 'commonjs2',
      },
      externals:externals,
      module:{
        rules:[
              {
                test: /\.vue$/,
                use: [
                  {
                    loader: 'vue-loader',
                  }
                ]
              },
              {
                test: /\.m?jsx?$/,
                use: [
                  {
                    loader: 'cache-loader',
                  },
                  {
                    loader: 'babel-loader'
                  }
                ]
              },
        ]
      },
      plugins:[
          new VueLoaderPlugin(),
          new webpack.ProgressPlugin(),
      ],
      optimization: {
        minimize: false,
      }
}

 