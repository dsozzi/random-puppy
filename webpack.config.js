var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:  ["babel-polyfill", "whatwg-fetch", "./app/index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index_bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            { test: /\.js$/, use: "babel-loader" },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, use:[ "file-loader"] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "app/index.html"
        })
    ]
};
 