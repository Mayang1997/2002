// webpack 打包工具环境的配置

// 导入 path 模块 - webpack 时基于node.js的环境
const path = require('path');
// 导入扩展功能 - HtmlWebpackPlugin： 自动生成 HTml单页面
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 导入自动删除 dist 文件的包 - 最新
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 导入 HMR 热更新包 
const webpack = require('webpack');
// 编译抽取 css /s[ac]ss / less 文件
const  MiniCssExtractPlugin  =  require('mini-css-extract-plugin');


// 区分开发环境与生成环境 =- 使用 process.env.NODE_ENV 获取变量
const env = process.env.NODE_ENV;

// 生产环境
const config = {
    // mode - 环境：production 生产环境
    mode: 'production',
    // entry - 入口：指定 webpack 打包或者本地服务运行时的程序默认文件
    /* 
        Path.resolve() - 设置入口的绝对路径
        参数一：__dirname 表示绝对路径 - 根路径到当前根文件的路径
        参数二：和__dirname 拼接组成绝对路径 
    */
    entry: path.resolve(__dirname,'./src/main.js'),

    // output - 出口：打包文件之后，打包的结果存放的位置
    output: {
        // 打包后结果存放的位置 - 出口文件路径的设置只能为绝对路径
        path: path.resolve(__dirname,'dist'),
        // filename：设置打包后文件的文件名s
        filename: 'static/js/[name].[hash].js', 
    },

    // plugin - 扩展功能：
    plugins: [
        // 自动生成 html5 单文件配置
        new HtmlWebpackPlugin({
            // template - 模板： 设置模板的绝对路径或者相对，默认情况下为 src/index.ejs
            template: path.resolve(__dirname, './public/index.html'),
            // title 标题： 设置模板html文件的 title 名
            title: 'React框架学习',
        }),
        // 自动删除 dist 文件夹的包 - 最新的不需要传任何参数
        new CleanWebpackPlugin(),
        // 编译转换配置css文件
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[chunkHash:8].css'
        })
    ],
    // loaders: 编译转换各种代码文件，让浏览器能识别
    module: {
        // rules: 规则 - 编译转换代码文件需要配置的属性
        rules: [
            // 编译转换 css | sass
            {test:/\.css$/, use:['style-loader','css-loader']},
            { test: /\.s[ac]ss$/, use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader'] },
            // 编译 ES6/js 文件 
            { 
                test: /\.js$/, exclude: /(node_modules|bower_components)/,
                use: { loader: 'babel-loader', options: { presets: [ ['@babel/preset-env'], ] } }
            },
        ]
    },
    // 配置扩展名是否可省略
    resolve: {
        alias: {
          '@': path.resolve(__dirname, './src')
        },
        extensions: [".js", ".jsx", ".json"]
    }
}

// 开发环境 development
if (env === 'development'){
    // 开发环境 development
    config.mode = 'development';

    // // HMR 热更新 - 适用于开发环境
    config.plugins.push(new webpack.NamedModulesPlugin());
    config.plugins.push(new webpack.HotModuleReplacementPlugin());

    config.module.rules.push(
        // ESlint 代码规范检测
        { test: /\.js$/, exclude: /node_modules/,loader: 'eslint-loader',enforce:'pre'}
    );
        
    // 代码报错时，能跟踪到源代码的位置
    config.devtool = 'inline-source-map';

    // devServer: 代理配置，端口，监听刷新等都在这里配置
    config.devServer = {
        // port: 配置端口
        port: '8090',
        // open: 浏览器是否自动打开
        open: true,
        // contentBase: 设置本地服务所指向的静态资源目录，使用绝对路径
        contentBase: path.resolve(__dirname, 'public'),
        // 开启 HMR 热更新
        hot: true,
        // 开启当eslint检测到错误时，出现遮罩层
        overlay: {
            errors: true
        },
        // 跨域：代理
        proxy: {
            "/api": {
              target: "http://localhost:3000",
              secure: false
            }
        }
    };
    
}

// 导出环境
module.exports = config