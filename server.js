const express = require('express')
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')
const http = require('http')
const webpack = require('webpack')

const config = require('./webpack')

const port = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)
const compiler = webpack(config)

const hmr = hotMiddleware(compiler)
const middleware = devMiddleware(compiler, {
    publicPath: config.output.publicPath,
    index: 'index.html',
    stats: { colors: true },
})

app.use(hmr)
app.use(middleware)
app.use('*', middleware)

server.listen(port)
