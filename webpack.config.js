module.exports = {
    entry: './src/app.js',
    output: {
        path: './build',
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            }
        ]
    }
};