const path = require('path');

let mode = process.env.NODE_ENV === "production" ? "production": "development";

module.exports = {
    mode: mode,
    devtool: 'source-map',
    //devtool: false,
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: false,
    },
    module: {
        rules: [
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
}