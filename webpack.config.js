var copyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  debug: true,
  entry: {main:"./src/js/main.js"},
  output: {
    path: "./public/js",
    filename: "bundle.js",
    publicPath: "/"
  },
  stats:{
    colors:true,
    reasons:true
  },
  plugins:[
      new copyWebpackPlugin([
        {from:"./src/assets/logobtt_hd.png", to:"../images/logo.png"}, 
        {from:"./src/assets/css/footer.css", to:"../css/footer.css"}
      ])
  ],
  module: {
    preLoaders: [
        { test: /\.json$/, loader: 'json'},
    ],
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: "babel",
      },
      {
        test: /\.vue$/, loader: 'vue'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader?name=images/img-[hash:6].[ext]"
      }
    ]
  },
  babel: {
     presets: ['es2015'],
     plugins: ['transform-runtime']
  }
}
