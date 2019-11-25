const path = require("path");

module.exports = {
  components: "src/**/*.js",
  pagePerSection: true,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.inline\.svg$/,
          use: [
            {
              loader: "babel-loader"
            },
            {
              loader: path.resolve("./customLoader/svg-loader"),
              options: {
                template: path.resolve(__dirname, "./customLoader/template.js")
              }
            }
          ]
        },
        {
          test: /\.base\.svg$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 10000,
                name: "images/[hash].[ext]"
              }
            }
          ]
        },
        {
          test: /\.css$/,
          loaders: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
              options: {
                modules: true
              }
            }
          ]
        }
      ]
    }
  }
};
