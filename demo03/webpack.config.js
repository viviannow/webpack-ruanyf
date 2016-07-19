module.exports = {
// 页面入口文件 
  entry: './main.jsx',
  // 入口文件输出配制
  output: {
    filename: 'bundle.js'
  },

  module: {
    // 加载器配置 文件类型 模块在哪 用到的模块 babel-loader 要依赖es2015 和react
    loaders:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react',
      },
    ]
  }

};
