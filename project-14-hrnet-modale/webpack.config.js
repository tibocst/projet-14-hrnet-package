const path = require('path');

module.exports = {
  entry: path.join(__dirname, "src/lib", "index.js"),
  output: {
    path:path.resolve(__dirname, "dist"),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /\.(png|jp(e*)g|svg|gif)$/,
      //   type: "asset/resource",
      // }
    ]
  },
  externals: {
    react: 'commonjs react',
    'react-dom': 'commonjs react-dom',
  },
}