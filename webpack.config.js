const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const CopyPlugin = require("copy-webpack-plugin");

let mode = process.env.NODE_ENV === "production" ? "production": "development";

module.exports = {
    mode: mode,
    entry: './src/main.js',
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
                // images inline depends on size
                // Now webpack will automatically choose between resource and inline by following a default condition: a file with size less than 8kb will be treated as a inline module type and resource module type otherwise.
                test: /\.(jpe?g|png|svg)$/i,
                type: "asset",
                generator: {
                    publicPath: 'img/',
                    outputPath: 'img/',
                  },                
            },
            // {
            //     // images
            //     test: /\.(jpe?g|png)$/i,
            //     type: "asset/resource",
            //     generator: {
            //         publicPath: 'img/',
            //         outputPath: 'img/',
            //       },
            // },
            // {
            //     test: /\.svg/,
            //     type: "asset/inline",
            // },
            {
                // css
                test: /\.s?css$/i,
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'node_modules/owl-carousel/owl-carousel'),
                ],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: "img/" },
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],

            },
            {
                // babel
                test: /\.jsx?$/i,
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
        new CleanWebpackPlugin(),
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
        // new CopyPlugin({
        //     patterns: [
        //       { from: "./src/img", to: "img" }
        //     ],
        //   }),
    ],
    resolve: {
        extensions: [".js", ".jsx"],
    }
}