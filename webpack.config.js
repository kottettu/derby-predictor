var path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    mode: 'development',
    entry: './front/main.js',
    output: {
        path: path.join(__dirname, "public/"),
        filename: 'index.js'
    },
    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader',},
            {
                test: /\.js$/,
                loader: 'babel-loader?presets=es2016',
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ]
            },
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        },
    },
    plugins: [
        new VueLoaderPlugin()
    ],
}