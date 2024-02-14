const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

// Ajoute le chemin app/javascript/controllers aux chemins de chargement de Webpack
environment.loaders.append('controllers', {
  test: /\.js$/,
  use: [{
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
    }
  }],
  include: /app\/javascript\/controllers/ // Chemin à inclure
})

environment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  })
)

environment.config.merge({
  node: {
    __dirname: true,
    __filename: true,
  }
})

module.exports = environment
