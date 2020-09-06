const path = require('path');

module.exports = {
    mode: 'development',
    resolve: [ "src", "node_modules", "public"],
    entry: path.resolve(__dirname, 'src/index.ts'),
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
        ],
    },
    devServer: {
        contentBase: "public"
    },
    resolve: {
        extensions: [ '.ts', '.js', '.mjs', '.cjs', '.json', '.html' ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
};