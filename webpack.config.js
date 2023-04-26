const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

let mode = process.env.NODE_ENV === "production" ? "production": "development";

module.exports = {
    mode: mode,
    //devtool: 'source-map',
    //devtool: false,
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: false,
        hot: true,
    },
    module: {
        rules: [
            {
                //css
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'node_modules/owl-carousel/owl-carousel'),
                ]
            },
            {
                // babel
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
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
        })
    ],
}