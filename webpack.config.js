const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = env => {
  const config = {
    entry: {
      app: path.resolve(__dirname, `src`, `app.js`)
    },
    output: {
      path: path.resolve(__dirname, `public`),
      filename: `byProductOfRequiredConfigProperties.js`
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          context: path.resolve(__dirname, 'src'),
          from: `**/*`,
          to: path.resolve(__dirname, 'public')
        }
      ])
    ]
  }

  console.log(`env: ${env}`)

  return config
}

