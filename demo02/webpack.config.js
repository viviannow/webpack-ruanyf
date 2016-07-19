module.exports = {
  entry: {
    bundle1: './main1.js',
    bundle2: './main2.js'
  },
  output: {
    filename: '[name].js'
  }
};
/*
引入文件 
要输出的名： 文件 

输出文件 ： 相对应 [name].js


*/