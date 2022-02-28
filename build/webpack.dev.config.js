const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config');

module.exports = merge(baseConfig, {
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(process.cwd(), 'dist'),
        },
        compress: true,
        port: 9000,
        client: {
            overlay: { errors: true, warnings: false },
        },
    },
});
