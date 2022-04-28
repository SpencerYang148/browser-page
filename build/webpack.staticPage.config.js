const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(baseConfig, {
    mode: 'production',
    output: {
        path: path.resolve(process.cwd(), 'dist-static'),
    },
    // plugins: [new BundleAnalyzerPlugin()],
});
