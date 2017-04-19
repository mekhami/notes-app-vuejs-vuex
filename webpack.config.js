module.exports = {
  entry: './main.js',
  output: {
    path: __dirname,
    filename: 'build.js'
  },
  module: {
      rules: [
        {
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015'],
                    plugins: ['babel-plugin-transform-runtime']
                }
            },
            exclude: /node_modules/
        },
        {
            test: /\.vue$/,
            use: {
                loader: 'vue-loader'
            }
        }
      ]
  },
}
