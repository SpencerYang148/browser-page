const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(process.cwd(), 'src/index.tsx'),
    output: {
        filename: 'main.js',
        path: path.resolve(process.cwd(), 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '...'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: { configFile: path.resolve(process.cwd(), 'tsconfig.json') },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/i,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(process.cwd(), 'build/template.html'),
        }),
    ],
};
