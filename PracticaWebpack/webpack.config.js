const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const basePath = __dirname;

module.exports = {
   context: path.join(basePath, "src"),
   resolve: {
      extensions: [".js", ".ts", ".tsx"]
   },
   entry: {
      app: './index.tsx',
      appStyles: './site.scss'
   },
   optimization: {
      splitChunks: {
         cacheGroups: {
            vendor: {
               chunks: "all",
               name: "vendor",
               test: /[\\/]node_modules[\\/]/,
               enforce: true
            }
         }
      }
   },
   output: {
      filename: "[name].[chunkhash].js"
   },
   devtool: "inline-source-map",
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader"
         },
         {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
               MiniCssExtractPlugin.loader,
               "css-loader",
               {
                  loader: "sass-loader",
                  options: {
                     implementation: require("sass")
                  }
               }
            ]
         },
         {
            test: /\.css$/,
            exclude: /node_modules/,   
            use: [MiniCssExtractPlugin.loader, "css-loader"]
         },
         {
            test: /\.(png|jpg)$/,
            exclude: /node_modules/,
            loader: "url-loader?limit=1000"
         },
         {
            test: /\.html$/,
            loader: "html-loader"
         },
         {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            loader: 'awesome-typescript-loader',
            options: {
               useBabel: true,
               "babelCore": "@babel/core",
            },
         }
      ]
   },
   plugins: [
      //Crear la nueva instancia del plugin
      new HtmlWebpackPlugin ({
         //Nombre del fichero de salida (es el que va a /dist)
         filename: 'index.html',
         //Fichero origen
         template: 'index.html'
      }),
      new MiniCssExtractPlugin ({
         filename: "[name].css",
         chunkFilename: "[id]. [chunkhash].css"
     })
   ],
   devServer: {
      port: 8088
   }
}