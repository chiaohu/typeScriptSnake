const path = require('path')

// 引入HTML插件
const HTMLWebpackPlugin = require('html-webpack-plugin')

// 引入CLEAN插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// webpack中的所有信息應該都寫在這裡
module.exports = {
    // 指定入口文件
    entry: "./src/index.ts",
    // 指定打包文件所在目錄 打包完放在哪
    output: {
        path: path.resolve(__dirname, 'dist'),
        // 打包後文件名子
        filename: "bundle.js"
    },
    // 指定WEBPACK打包時要使用模塊
    module: {
        // 指定要加載的規則
        rules: [
            {
                // test 指定的是規則生效文件
                test: /\.ts$/,
                // 要使用的LOADER
                use: [
                    // 配置BABEL
                    {
                        loader: 'babel-loader',
                        options: {
                            presets:[
                                [
                                    "@babel/preset-env",
                                    {
                                        targets:{
                                            "chrome": "88"
                                        },
                                        "corejs": "3",
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    }, 
                    'ts-loader'
                ],
                // 要排除的文件
                exclude: /node-modules/
            },

            // 設置LESS文件的處理
            {
                test: /\.less$/,
                // 由下面先執行
                use:[
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins:[
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: 'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },

    // 配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title: '貪食蛇遊戲'
            template: './src/index.html'
        })
    ],

    // 用來設置引用模塊
    resolve: {
        extensions: ['.ts', '.js']
    },
    mode: 'development'
}