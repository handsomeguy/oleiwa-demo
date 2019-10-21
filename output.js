{
  mode: 'production',
  context: '/Users/jacksonzeng/Desktop/node_modules/oleiwa',
  devtool: 'eval',
  node: {
    setImmediate: false,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
    process: 'mock'
  },
  output: {
    path: '/Users/jacksonzeng/Desktop/node_modules/oleiwa/dist',
    filename: '[name].js',
    publicPath: '/',
    globalObject: '(typeof self !== \'undefined\' ? self : this)'
  },
  resolve: {
    alias: {
      '@': '/Users/jacksonzeng/Desktop/node_modules/oleiwa/src',
      vue$: 'vue/dist/vue.runtime.esm.js'
    },
    extensions: [
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm'
    ],
    modules: [
      'node_modules',
      '/Users/jacksonzeng/Desktop/node_modules/oleiwa/node_modules',
      '/Users/jacksonzeng/Desktop/node_modules/oleiwa/node_modules/@vue/cli-service/node_modules'
    ]
  },
  resolveLoader: {
    modules: [
      '/Users/jacksonzeng/Desktop/node_modules/oleiwa/node_modules/@vue/cli-plugin-eslint/node_modules',
      '/Users/jacksonzeng/Desktop/node_modules/oleiwa/node_modules/@vue/cli-plugin-babel/node_modules',
      'node_modules',
      '/Users/jacksonzeng/Desktop/node_modules/oleiwa/node_modules',
      '/Users/jacksonzeng/Desktop/node_modules/oleiwa/node_modules/@vue/cli-service/node_modules'
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: '/Users/jacksonzeng/Desktop/node_modules/oleiwa/node_modules/.cache/vue-loader',
              cacheIdentifier: '259fdb70'
            }
          },
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              },
              cacheDirectory: '/Users/jacksonzeng/Desktop/node_modules/oleiwa/node_modules/.cache/vue-loader',
              cacheIdentifier: '259fdb70'
            }
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').oneOf('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').oneOf('pug-template') */
          {
            use: [
              {
                loader: 'raw-loader'
              },
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal') */
          {
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal') */
          {
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    run_: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    render: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    renderSync: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    info: 'dart-sass\t1.23.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.5.1\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Color: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      List: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Map: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Null: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Number: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      String: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Error: function Error() { [native code] }
                    }
                  }
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    run_: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    render: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    renderSync: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    info: 'dart-sass\t1.23.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.5.1\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Color: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      List: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Map: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Null: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Number: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      String: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Error: function Error() { [native code] }
                    }
                  }
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    run_: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    render: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    renderSync: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    info: 'dart-sass\t1.23.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.5.1\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Color: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      List: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Map: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Null: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Number: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      String: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Error: function Error() { [native code] }
                    }
                  }
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal') */
          {
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    run_: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    render: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    renderSync: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    info: 'dart-sass\t1.23.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.5.1\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Color: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      List: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Map: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Null: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Number: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      String: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Error: function Error() { [native code] }
                    }
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    run_: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    render: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    renderSync: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    info: 'dart-sass\t1.23.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.5.1\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Color: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      List: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Map: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Null: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Number: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      String: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Error: function Error() { [native code] }
                    }
                  },
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    run_: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    render: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    renderSync: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    info: 'dart-sass\t1.23.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.5.1\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Color: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      List: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Map: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Null: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Number: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      String: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Error: function Error() { [native code] }
                    }
                  },
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    run_: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    render: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    renderSync: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    info: 'dart-sass\t1.23.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.5.1\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Color: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      List: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Map: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Null: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Number: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      String: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Error: function Error() { [native code] }
                    }
                  },
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal') */
          {
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    run_: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    render: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    renderSync: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    info: 'dart-sass\t1.23.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.5.1\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Color: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      List: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Map: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Null: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Number: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      String: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Error: function Error() { [native code] }
                    }
                  },
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal') */
          {
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal') */
          {
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: '/Users/jacksonzeng/Desktop/node_modules/oleiwa/node_modules/.cache/babel-loader',
              cacheIdentifier: '00eec636'
            }
          },
          {
            loader: 'babel-loader'
          }
        ]
      },
      /* config.module.rule('eslint') */
      {
        enforce: 'pre',
        test: /\.(vue|(j|t)sx?)$/,
        exclude: [
          /node_modules/,
          '/Users/jacksonzeng/Desktop/node_modules/oleiwa/node_modules/@vue/cli-service/lib'
        ],
        use: [
          {
            loader: 'eslint-loader',
            options: {
              extensions: [
                '.js',
                '.jsx',
                '.vue'
              ],
              cache: true,
              cacheIdentifier: '60b06eed',
              emitWarning: true,
              emitError: false,
              eslintPath: '/Users/jacksonzeng/Desktop/node_modules/oleiwa/node_modules/eslint',
              formatter: function () { /* omitted long function */ }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"',
          BASE_URL: '"/"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ]
      }
    ),
    /* config.plugin('hmr') */
    new HotModuleReplacementPlugin(),
    /* config.plugin('progress') */
    new ProgressPlugin(),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        templateParameters: function () { /* omitted long function */ },
        template: '/Users/jacksonzeng/Desktop/node_modules/oleiwa/public/index.html'
      }
    ),
    /* config.plugin('preload') */
    new PreloadPlugin(
      {
        rel: 'preload',
        include: 'initial',
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/
        ]
      }
    ),
    /* config.plugin('prefetch') */
    new PreloadPlugin(
      {
        rel: 'prefetch',
        include: 'asyncChunks'
      }
    ),
    /* config.plugin('copy') */
    new CopyWebpackPlugin(
      [
        {
          from: '/Users/jacksonzeng/Desktop/node_modules/oleiwa/public',
          to: '/Users/jacksonzeng/Desktop/node_modules/oleiwa/dist',
          toType: 'dir',
          ignore: [
            '.DS_Store',
            {
              glob: 'index.html',
              matchBase: false
            }
          ]
        }
      ]
    )
  ],
  entry: {
    app: './src/main.js'
  }
}
