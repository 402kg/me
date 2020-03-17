const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')

const options = {
    resolve: {
        extensions: ['.js', '.html'],
        modules: ['node_modules', 'src'],
        alias: {
            assets: path.resolve(__dirname, './src/assets'),
            components: path.resolve(__dirname, './src/components'),
            services: path.resolve(__dirname, './src/services'),
            src: path.resolve(__dirname, './src'),
            'react-dom': '@hot-loader/react-dom',
        },
    },
    resolveLoader: {
        modules: ['node_modules', 'src'],
    },
    entry: {
        main: ['react-hot-loader/patch', './src/main.js'],
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                }],
            },
            {
                test: /\.(eot|svg|cur)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[hash:20].[ext]',
                    limit: 10000,
                },
            },
            {
                test: /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/,
                loader: 'url-loader',
                options: {
                    name: '[name].[hash:20].[ext]',
                    limit: 10000,
                },
            },
        ],
    },
    plugins: [
        ((Plugin) => new Plugin([{ to: '', from: 'src/assets' }], {
            ignore: ['.gitkeep', '**/.DS_Store', '**/Thumbs.db'],
            debug: 'warning',
        }))(require('copy-webpack-plugin')),
        ((Plugin) => new Plugin({
            filename: './index.html',
            template: './src/index.html',
            inject: 'body',
        }))(require('html-webpack-plugin')),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
    ],
}

module.exports = process.env.NODE_ENV !== 'production'
    ? webpackMerge(options, require('./webpack.dev'))
    : webpackMerge(options, require('./webpack.dist'))
