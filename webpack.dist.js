const path = require('path')

module.exports = {
    mode: 'production',
    output: {
        path: path.join(process.cwd(), 'docs'),
        chunkFilename: '[id].[chunkhash].js',
        filename: '[id].[hash:12].js',
        publicPath: '/me',
    },
    plugins: [
        ((Plugin) => new Plugin({
            chunks: ['main'],
            filename: './index.html',
            inject: true,
            template: './src/index.html',
        }))(require('html-webpack-plugin')),
    ],
    optimization: {
        minimizer: [((Plugin) => new Plugin())(require('terser-webpack-plugin'))],
    },
}
