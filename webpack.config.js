const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { webpack } = require('webpack')
// var SRC_PATH = path.resolve(ROOT_PATH, 'src');
const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin
if (module.hot) {
  module.hot.accept()
}
module.exports= {
  // entry: ['./main.js', './main1.js', './src/index.jsx'], 
  entry: ['./src/index.jsx'], 

  // 如果你传入一个字符串：这个字符串作为主模块的启动点。（本句翻译待考）
  // 如果你传入一个数组，数组中所有模块都会启动，都会被导出到一起。
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'build.js'
  },
  // mode: 'development',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ["@babel/plugin-transform-runtime","@babel/plugin-proposal-class-properties"]
          },      
        }
      }, { 
        test: /\.css$/,
        loader: "style-loader"
      },{
        test: /\.(ts|tsx)$/i,
        use:[{
          loader: 'babel-loader'
        }]
      }
    ]
  },
  devtool:'inline-source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    // dev 启动的时候跑的
    // historyApiFallback: true, // 当使用 HTML5 History API 时, 所有的 404 请求都会响应 index.html 的内容
    // host: conf.clientHost,
    // port: conf.clientPort,
    // inline: conf.isHmr,
    // hot: conf.isHmr,
    // contentBase: outputPath,
    // publicPath: conf.compilerPublicPath,
    // contentBase: "./",            //本地服务器的搭建目录，默认为当前目录       
    historyApiFallback:true,      //启动\(^o^)/~
    // inline:true,                  //实现自动刷新（必须在命令行输入--inline）
    // progress:true,                //显示打包进程（必须在命令行输入--hot）
    hot:true,                     //实现热加载         
    port:8080,                     //设置端口
      //  congress：true,                  //  支持压缩
    // noInfo: true,
    // compress: false,
    // liveReload: false,
    // overlay: false,
    // overlay: {
    //   errors: true, // 编译出错是显示在网页上
    // },
    // clientLogLevel: 'error', // 'silent' | 'trace' | 'debug' | 'info' | 'warn' | 'error'
    // proxy: proxy(),
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    //   'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization, token',
    //   'Access-Control-Max-Age': 1 * 24 * 60 * 60, // 1 day
    // },
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
  })]
}

// , new HotModuleReplacementPlugin()