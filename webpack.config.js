var path = require("path");

module.exports = {
    entry: "./js/app.js",
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, "js")
    },
    mode : 'development', //production
    devtool: "source-map",
    watch: true, //nasluchiwanie zmian
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [["env", {
                            targets: {
                                browsers: [
                                    '> 1%', 'last 2 versions'
                                ]
                            }
                        }]]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                new require('autoprefixer')({
                                    browsers: [
                                        '> 1%', 'last 2 versions'
                                    ]
                                })
                            ]
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|jpeg|gif|png|csv)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: 'images',
                        outputPath: 'images'
                    }
                }
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: 'fonts',
                        outputPath: 'fonts'
                    }
                }
            }
        ]
    }
}