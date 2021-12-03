const {resolve} = require('path')
console.log(process.env.npm_package_config_prot, 'process.env.npm_package_config_prot')
module.exports= {
  entry: ['./main.js', './main1.js'], 
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
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

}