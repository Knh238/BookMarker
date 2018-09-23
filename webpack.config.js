// const isDev = process.env.NODE_ENV === 'development'

// module.exports = {
//   mode: isDev ? 'development' : 'production',
//   entry: [
//     '@babel/polyfill', // enables async-await
//     './client/index.js'
//   ],
//   output: {
//     path: __dirname,
//     filename: './public/bundle.js'
//   },
//   resolve: {
//     extensions: ['.js', '.jsx']
//   },
//   devtool: 'source-map',
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader'
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader']
//         // include: [helpers.root('src', 'assets')]
//       }
//     ]
//   }
// }
const path = require('path')

module.exports = {
  entry: ['babel-polyfill', './client/index.js'],
  mode: 'development',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'client')],
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  node: {
    net: 'empty',
    tls: 'empty',
    fs: 'empty',
    dns: 'empty'
  }
}
