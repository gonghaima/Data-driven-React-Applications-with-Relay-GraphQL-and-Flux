module.exports = {
    entry: "./js/app.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,         // Match both .js and .jsx files
                exclude: /node_modules/,
                loader: "babel-loader",
                query:
                {
                    presets: ['react', 'es2015', 'stage-0',{"plugins": ["./babelRelayPlugin"]}]
                }
            }
        ]
    }
}