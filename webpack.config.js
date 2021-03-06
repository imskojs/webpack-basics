const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => {
  const config = {
    entry: {
      app: path.resolve(__dirname, `src`, `app.js`),
      vendor: ['moment']
    },
    output: {
      path: path.resolve(__dirname, `public`),
      filename: `[name].bundle.[chunkHash].js`
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
          use: [ `exports-loader?leftPad`, `imports-loader?window=>{}`  ]
        }
      ]
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          context: path.resolve(__dirname, `src`),
          from: `**/*`,
          ignore: [`**/*.js`, `**/index.html`],
          to: path.resolve(__dirname, `public`)
        }
      ]),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      }),
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, `src`, `index.html`) })
    ],
  }

  console.log(`env: ${env}`)

  return config
}

