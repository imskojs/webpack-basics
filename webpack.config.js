const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = env => {
  const config = {
    entry: {
      app: path.resolve(__dirname, `src`, `app.js`),
      vendor: ['moment']
    },
    output: {
      path: path.resolve(__dirname, `public`),
      filename: `[name].bundle.js`
    },
    module: {
      rules: [
        { 
          test: /\.js$/, 
          exclude: `/node_modules/`,
          use: [ `babel-loader` ] 
        },
        { 
          test: require.resolve(path.resolve(__dirname, `non_node_modules`, `left-pad`)),
          use: [ `imports-loader?window=>{}`, `exports-loader?leftPad` ]
        }
      ]
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          context: path.resolve(__dirname, `src`),
          from: `**/*`,
          ignore: [`**/*.js`],
          to: path.resolve(__dirname, `public`)
        }
      ]),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      })
    ],
  }

  console.log(`env: ${env}`)

  return config
}

