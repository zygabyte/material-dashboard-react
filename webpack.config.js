module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ]
  }
};