const path = require("path");
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ENV_MODE = 'development';

module.exports = [{
  context: __dirname,
  entry: './templates/assets/js/src/main.ts',
  output: {
    path: path.resolve('./static/js'),
    filename: "app.js"
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  mode: ENV_MODE,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        },
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader',
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          },
          includePaths: ['public/css/']
        }
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve('templates/assets/js/src')
    },
    extensions: ['.js', '.ts', '.vue']
  },
  devServer: {
    host: '127.0.0.1',
    port: 3000,
    contentBase: path.join(__dirname, './templates/'),
    inline: true,
    hot: true,
  }
},
  {
    mode: ENV_MODE,
    entry: {
      'main': './templates/assets/sass/app.sass',
    },
    output: {
      path: path.resolve('./static/css/'),
      publicPath: '/css/',
      filename: 'app.css'
    },
    module: {
      rules: [
        {
          test: /\.sass$/,
          loader: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader", "sass-loader"]
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: "app.css",
        allChunks: false
      })
    ]
  }
];
