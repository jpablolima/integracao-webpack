const path = require('path')
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    mode: 'production',
    entry: './src/main.ts',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        port: 9000
    },


    output: {
        filename: 'app.min.js',
        path: path.join(__dirname, 'dist')
    },

    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "public" },
            ],
        }),
    ],

    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.ts/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    }
}