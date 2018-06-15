var path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    mode: 'development',
    entry: './front/main.ts',
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
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
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
        extensions: ['.js', '.ts', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        },
    },
    plugins: [
        new VueLoaderPlugin()
    ],
}
