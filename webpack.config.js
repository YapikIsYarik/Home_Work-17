const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
   mode: 'development',
   entry: path.resolve(__dirname, "src/index.js"),
   output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js"
   },
   devServer: {
      port: 4200,
      open: true
   },
   module: {
      rules: [
         {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
         },
         // {
         //    test: /\.html$/i,
         //    use: ["html-loader"],
         // },
         {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader',
            options: {
               outputPath: 'assets/images',
            }
         },
         {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env']
               }
            }
         },
         {
            test: /\.(ogg|mp3|wav|mpe?g)$/i,
            type: "asset/resource"
         }
      ],
   },
   plugins: [new HtmlWebpackPlugin({
      title: "HW #17",
      template: "src/index.html"
   })]
}