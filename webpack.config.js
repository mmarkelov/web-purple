var path = require('path');
var webpack = require('webpack');

var ForceCaseSensitivityPlugin = require('force-case-sensitivity-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var env = process.env.NODE_ENV || 'development';
var isProd = () => env === 'production';

var plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env),
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors',
        minChunks: Infinity,
    }),
    new ForceCaseSensitivityPlugin(),
    new HtmlWebpackPlugin({
        title: 'WebPurple',
        filename: '../index.html',
        hash: true,
        template: './src/index.html',
    }),
];

if (isProd()) {
    plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {

    context: path.join(__dirname, '.'),

    entry: {
        vendors: [
            'react',
            'react-dom',
            'react-tap-event-plugin',
            'redux',
            'material-ui',
            'redux-thunk'
        ],

        main: path.join(__dirname, 'src', 'boot.jsx'),
    },

    output: {
        path: path.join(__dirname, 'public', 'build'),
        filename: '[name].[hash].js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },

    resolve: {
        extensions: ['', '.jsx', '.js'],
    },

    plugins,

    devtool: isProd() ? 'source-map' : 'eval'
};
