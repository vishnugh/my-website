const path = require('path');

const outputPath = path.join(__dirname, 'public');

module.exports = {
    entry: './src/app.js',
    output: {
        path: outputPath,
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: outputPath
    }
}