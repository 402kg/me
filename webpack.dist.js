const path = require('path')

module.exports = {
    mode: 'production',
    output: {
        path: path.join(process.cwd(), 'dist'),
        chunkFilename: '[id].[chunkhash].js',
        filename: '[id].[hash:12].js',
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
