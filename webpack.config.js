'use strict';
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    // Add source map support
    devtool: "#cheap-source-map",
    entry: "./src/client.js",
    output: {
        path: __dirname,
        filename: "static/bundle.js"
    },
    resolve: {
        extensions: ['.js', '.marko'],
        modules: ['./', 'node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.marko$/,
                loader: 'marko-loader'
            },
            {
                test: /\.(less|css)$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader?sourceMap', use: 'css-loader?sourceMap!less-loader' })
            },
            {
                test: /\.svg/,
                loader: 'svg-url-loader'
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                loader: 'file-loader',
                query: {
                    name: 'static/images/[hash].[ext]',
                    publicPath: '/'
                }
            }
        ]
    },
    plugins: [
      // Write out CSS bundle to its own file:
      new ExtractTextPlugin({ filename: 'static/bundle.css', allChunks: true })
    ],
    devServer: {
      disableHostCheck: true,
      host : '0.0.0.0',
  		port: 3000,
  		contentBase: [path.join(__dirname, "src")],
    }
};
