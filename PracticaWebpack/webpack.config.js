const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const basePath = __dirname;


module.exports = {
   context: path.join(basePath, "src"),
   entry: ['./index.js'],
   output: {
      filename: "bundle.js"
   },
   module: {
      rules: [
         {
            test: /\.(png|jpg)$/,
            exclude: /node_modules/,
            //Si la imagen pesa menos de 1k la incluye en el js.
            loader: "url-loader?limit=1000" 
         },
         {
            test: /\.html$/,
            loader: "html-loader"
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         filename: 'index.html',
         template: 'index.html'
      })
   ]
};