const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

let mode = process.env.NODE_ENV === "production" ? "production": "development";

module.exports = {
    mode: mode,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    //devtool: 'source-map',
    //devtool: false,
    devServer: {
        // static: {
        //     directory: path.resolve(__dirname, 'dist'),
        // },
        watchFiles: ["src/**/*"],
        port: 3000,
        open: false,
        hot: true,
    },
    module: {
        rules: [
            {
                //css
                test: /\.s?css$/i,
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'node_modules/owl-carousel/owl-carousel'),
                ],
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],

            },
            {
                // babel
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css',
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new CopyPlugin({
            patterns: [
              { from: "./src/img", to: "img" }
            ],
          }),
    ],
}