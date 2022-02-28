const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config');

module.exports = merge(baseConfig, {
    mode: 'production',
    output: {
        path: path.resolve(process.cwd(), 'dist-static'),
    },
});
