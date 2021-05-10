const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlplugin = new HtmlWebpackPlugin({
  template: "./src/index.html", //指定要用到的模板文件
  filename: "index.html", //指定生成文件的名称，该文件存在于内存中，在目标文件中不显示
});
const VueloaderPluhin = require("vue-loader/lib/plugin");
module.exports = {
  mode: "development", //mode用来指定构建的模式，有development和production两个参数
  entry: path.join(__dirname, "./src/index.js"), //打包入口文件的路径
  output: {
    path: path.join(__dirname, "./dist"), //输出文件的名称
    filename: "bundle.js",
  },
  plugins: [htmlplugin, new VueloaderPluhin()], //plugins数组是打包期间会用到的插件列表
  module: {
    rules: [
      //其中test表示要匹配的文件类型，use表示对应调用的loader
      { test: /\.css$/, use: ["style-loader", "css-loader", "postcss-loader"] },
      { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.js$/, use: ["babel-loader"], exclude: /node_modules/ },
      {
        test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
        use: "url-loader?limit=16941",
      },
      { test: /\.vue$/, loader: "vue-loader" },
    ],
  },
};
