const path = require('path');

module.exports = {
    mode: 'production',
    resolve: [ "src", "node_modules", "public"],
    entry: path.resolve(__dirname, 'src/index.ts'),
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
        ],
    },
    resolve: {
        extensions: [ '.ts', '.js', '.mjs', '.cjs', '.json', '.html' ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/assets/js'),
    }
};