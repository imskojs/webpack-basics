const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = env => {
  const config = {
    entry: {
      app: path.resolve(__dirname, `src`, `app.js`)
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
      ])
    ],
  }

  console.log(`env: ${env}`)

  return config
}

