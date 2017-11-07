const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const path = require("path");

const config = {
    devtool: "eval",
    devServer: {
        historyApiFallback: true,
    },
    entry: [
        "webpack-dev-server/client?http://localhost:3000",
        "webpack/hot/only-dev-server",
        "react-hot-loader/patch",
        "./src/app/index.js",
    ],
    output: {
        path: path.join(__dirname, "dist/"),
        filename: "app.js",
        publicPath: "/dist/",
        pathinfo: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                use: ["babel-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader?sourceMap&importLoaders=1",
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: () => [autoprefixer],
                            sourceMap: true,
                        },
                    },
                    "sass-loader?sourceMap",
                ],
            },
            {
                test: /\.json$/,
                loader: "json-loader",
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: "file",
                include: "/src/app/stylesheets/assets",
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
};

module.exports = config;
