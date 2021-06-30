const craco = require('@craco/craco')
const webpack = require('webpack')

const config = craco.createWebpackProdConfig(require('../craco.config'))

const compiler = webpack(config)

compiler.watch({}, (err, stats) => {
  console.log(stats.hash)
})
