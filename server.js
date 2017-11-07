const path = require("path");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("./webpack.config");

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    contentBase: path.join(__dirname, "dist"),
    hot: true,
    historyApiFallback: true,
}).listen(3000, "localhost", (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log("Listening at localhost:3000");
});
