const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    entry: [
        __dirname + '/react/shemesh.js'
    ],
    output: {
        path: __dirname + '/public/js/',
        filename: 'app.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: false,
            compress: {
                sequences: true,
                booleans: true,
                loops: true,
                unused: true,
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            children: true,
            async: true,
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            }
        ]
    },
    watch: true,
    devServer: {
        host: 'localhost',
        port: 1234,
        hot: true,
        proxy: {
            '*': 'http://localhost:5328'
        }
    }
};
