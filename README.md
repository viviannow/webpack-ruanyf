
Webpack 是一个模块打包器。   
它将根据模块的依赖关系进行静态分析，然后将这些模块按照指定的规则生成对应的静态资源。  

![image](https://dn-cnode.qbox.me/FghqF1peHRjg9-TmsYfUR7q19M4l)

基本命令

	  webpack         // 最基本的启动webpack的方法  
	  webpack -w      // 提供watch方法；实时进行打包更新
	  webpack -p      // 对打包后的文件进行压缩
	  webpack -d      // 提供source map，方便调式代码
	  
全局安装

	  # npm install webpack -g
	  项目安装：
	  # 进入项目目录
	  # 确定已经有 package.json，没有就通过 npm init 创建
	  # 安装 webpack 依赖
	  # npm install webpack --save-dev
	  
使用ES6

	安装 babel-loader： 
	# npm install babel-loader --save-dev
	安装转码规则：       
	# npm install babel-preset-es2015 --save-dev
	ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个
	# npm install --save-dev babel-preset-stage-0
	# npm install --save-dev babel-preset-stage-1
	# npm install --save-dev babel-preset-stage-2
	# npm install --save-dev babel-preset-stage-3
	参考格式：
	{
		test: /\.js$/,
		loader: 'babel?presets[]=es2015,presets[]=stage-0'
	}
	
编译css

	安装css-loader：  
	# npm install css-loader  --save-dev
	安装style-loader  
	# npm install style-loader  --save-dev
	参考格式：
	{
		test: /\.css$/,
		loaders: ['style', 'css', 'autoprefixer']
	}
	
编译less

	# npm install less --save-dev
	安装less-loader： 
	# npm install less-loader --save-dev
	参考格式：
	{
		test: /\.less/,
		loaders: ['style', 'css', 'autoprefixer', 'less'],
	}
	
使用autoprefixer自动补上浏览器兼容

	# npm install autoprefixer-loader --save-dev
	参考格式：
	{
		test: /\.css$/,
		loaders: ['style', 'css', 'autoprefixer']
	}, {
		test: /\.less/,
		loaders: ['style', 'css', 'autoprefixer', 'less'],
	}
	
编译文件

	安装file-loader： 
	# npm install file-loader --save-dev
	参考格式：
	{
		test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
		loader: 'file-loader?name=[hash].[ext]'
	}
	
编译图片
```
  # npm install url-loader --save-dev
  参考格式：
  {
  test: /\.(png|jpg)$/,
  loader: 'url?limit=1200&name=[hash].[ext]'
  }
```

编译JSX
```
  # npm install jsx-loader --save-dev
  # npm install babel-preset-react --save-dev
  参考格式：
  {
  test: /\.jsx$/,
  loaders: ['jsx', 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react']
  }
```

示例源码

在项目目录下，新建一个webpack.config.js文件，把下面代码复制进去，然后在新建一个app.js和index.js文件，写上console.log('你好世界');
执行命令：webpack 然后找到build目录就看到编译后的文件了
```
  var webpack = require('webpack');
  
  module.exports = {
	  entry: {
		  app: './app', //编译的入口文件
		  index: './index', //编译的入口文件
	  },
	  output: {
		  publicPath: '/build/', //服务器根路径
		  path: './build', //编译到当前目录
		  filename: '[name].js' //编译后的文件名字
	  },
	  module: {
		  loaders: [{
				  test: /\.js$/,
				  loader: 'babel?presets=es2015'
			  }, {
				  test: /\.css$/,
				  loaders: ['style', 'css', 'autoprefixer']
			  }, {
				  test: /\.less/,
				  loaders: ['style', 'css', 'autoprefixer', 'less'],
			  }, {
				  test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
				  loader: 'file-loader?name=[hash].[ext]'
			  }, {
				  test: /\.(png|jpg)$/,
				  loader: 'url?limit=1200&name=[hash].[ext]' //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
			  }
		  ]
	  },
	  plugins: [
			  new webpack.optimize.CommonsChunkPlugin('common.js') //将公用模块，打包进common.js
	  ],
	  resolve: {
		  extensions: ['', '.js', '.jsx'] //后缀名自动补全
	  }
  };
```

This repo is a collection of simple demos of Webpack. 这个仓库是一些简单的webpack的例子的集合。

These demos are purposely written in a simple and clear style. You will find no difficulty in following them to learn the powerful tool.这些例子书写的都很简洁，你学起这个工具来不会有难度。

## How to use 如何 使用

First, install [Webpack](https://www.npmjs.com/package/webpack) and [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) globally.首先，你要全局的安装 webpack与webpack-dev-server。

```bash
//i =>install
$ npm i -g webpack webpack-dev-server 
```

Then, clone the repo and install the dependencies. 然后，克隆仓库并安装依赖

```bash
$ git clone git@github.com:ruanyf/webpack-demos.git
$ cd webpack-demos
//下面是根据package.json安装
$ npm install  
```

Now, play with the source files under the repo's demo* directories. 现在就可以运行demo...目录下的源文件了。

```bash
$ cd demo01
//下面是根据webpack.config.js的配制运行的。启动一个本地服务 
$ webpack-dev-server 
```

Visit http://127.0.0.1:8080 with your browser. 用浏览器去访问 http://127.0.0.1:8080

## Foreword: What is Webpack 前言：什么是webpack

Webpack is a front-end build systems like Grunt and Gulp. webpack是一个类似于grunt与gulp的前端构建工具

It can be used as a module bundler similar to Browserify, and do [much more](http://webpack.github.io/docs/what-is-webpack.html).  它可以像Browserify一样打包模块。并且可以做更多。

```bash
$ browserify main.js > bundle.js
# be equivalent to 等同于
$ webpack main.js bundle.js
```

Its configuration file is `webpack.config.js`. 它的配制文件是webpack.config.js

```javascript
// webpack.config.js
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  }
};
```

After having `webpack.config.js`, you can invoke Webpack without any arguments.有了webpack.config.js文件你就可以不跟参数启用webpack。

```bash
$ webpack
```

Some command-line options you should know. 一些你要知道的命令行工具

- `webpack` – for building once for development 在开发时构建一次
- `webpack -p` – for building once for production (minification)再生产环境中构建 (minification微小)
- `webpack --watch` – for continuous incremental build 监听文件改动，持续构建
- `webpack -d` – to include source maps 引用源码的映射
- `webpack --colors` – for making things pretty 优化输出

To produce a production ready application, you could write `scripts` field in your package.json file as following. 创建要投入生产的应用，你可以在package.json文件中添加 scripts字段，如下：

```javascript
// package.json
{
  // ...
  "scripts": {
    "dev": "webpack-dev-server --devtool eval --progress --colors",
    "deploy": "NODE_ENV=production webpack -p"
  },
  // ...
}
```

## Index 索引

1. [Entry file 入口文件](#demo01-entry-file-source)
1. [Multiple entry files 多入口文件](#demo02-multiple-entry-files-source)
1. [Babel-loader babel加载器](#demo03-babel-loader-source)
1. [CSS-loader css加载器](#demo04-css-loader-source)
1. [Image loader 图片加载器](#demo05-image-loader-source)
1. [CSS Module css组件](#demo06-css-module-source)
1. [UglifyJs Plugin UglifyJs插件](#demo07-uglifyjs-plugin-source)
1. [HTML Webpack Plugin and Open Browser Webpack Plugin webpack的html与浏览器插件](#demo08-html-webpack-plugin-and-open-browser-webpack-plugin-source)
1. [Environment flags 环境 标记](#demo09-environment-flags-source)
1. [Code splitting 代码分离](#demo10-code-splitting-source)
1. [Code splitting with bundle-loader 用bundle-loader分离代码](#demo11-code-splitting-with-bundle-loader-source)
1. [Common chunk ](#demo12-common-chunk-source)
1. [Vendor chunk](#demo13-vendor-chunk-source)
1. [Exposing Global Variables 暴露全局变量](#demo14-exposing-global-variables-source)
1. [Hot Module Replacement ](#demo15-hot-module-replacement-source)
1. [React router react 路由](#demo16-react-router-source)

## Demo01: Entry file ([source](https://github.com/ruanyf/webpack-demos/tree/master/demo01)) 入口文件

Entry file is a file which Webpack will read to build bundle.js. webpack读取入口文件并编译成bundle.js

For example, `main.js` is an entry file. 例如，main.js是一个入口文件。

```javascript
// main.js
document.write('<h1>Hello World</h1>');
```

index.html

```html
<html>
  <body>
    <script type="text/javascript" src="bundle.js"></script>
  </body>
</html>
```

Webpack follows `webpack.config.js` to build `bundle.js`. webpack根据`webpack.config.js`去构建`bundle.js`

```javascript
// webpack.config.js
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  }
};
```

Launch the server, visit http://127.0.0.1:8080 . 启动服务器，访问网址...

```bash
$ webpack-dev-server
```

## Demo02: Multiple entry files ([source](https://github.com/ruanyf/webpack-demos/tree/master/demo02))

Multiple entry files are allowed. It is useful for a multi-page app. 多入口文件是支持的，这对多入口应用来说很有用。

```javascript
// main1.js
document.write('<h1>Hello World</h1>');

// main2.js
document.write('<h2>Hello Webpack</h2>');
```

index.html

```html
<html>
  <body>
    <script src="bundle1.js"></script>
    <script src="bundle2.js"></script>
  </body>
</html>
```

webpack.config.js

```javascript
module.exports = {
  entry: {
    bundle1: './main1.js',
    bundle2: './main2.js'
  },
  output: {
    filename: '[name].js'
  }
};
```

## Demo03: Babel-loader ([source](https://github.com/ruanyf/webpack-demos/tree/master/demo03)) babel加载器

Loaders are preprocessors which transform a resource file of your app ([more info](http://webpack.github.io/docs/using-loaders.html)). For example, [Babel-loader](https://www.npmjs.com/package/babel-loader) can transform JSX/ES6 file into JS file. Official doc has a complete list of [loaders](http://webpack.github.io/docs/list-of-loaders.html). loaders是一个可以转换你应用源文件的预处理器，如Babel-loader可以把你的JSX/ES6文件转换成js文件 ，官方有完整的loaders的列表

`main.jsx` is a JSX file.

```javascript
const React = require('react');
const ReactDOM = require('react-dom');

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.querySelector('#wrapper')
);
```

index.html

```html
<html>
  <body>
    <div id="wrapper"></div>
    <script src="bundle.js"></script>
  </body>
</html>
```

webpack.config.js

```javascript
module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      {
        // 加载babel-loader ，处理js或者jsx结尾的文件
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      },
    ]
  }
};
```

In `webpack.config.js`, `module.loaders` field is used to assign loaders. The above snippet uses `babel-loader` which also needs plugins [babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015) and [babel-preset-react](https://www.npmjs.com/package/babel-preset-react) to transpile ES6 and React. You can also take another way to set the babel query option.  在 `webpack.config.js`中，`module.loaders`是用来引用loaders的。上面用babel-loadder的同样要用插件babel-preset-es2015，与babel-preset-react去转义ES6与

```javascript
module: {
  loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }
  ]
}
```

## Demo04: CSS-loader ([source](https://github.com/ruanyf/webpack-demos/tree/master/demo04))

Webpack allows you to require CSS in JS file, then preprocessed CSS file with CSS-loader.

main.js

```javascript
require('./app.css');
```

app.css

```css
body {
  background-color: blue;
}
```

index.html

```html
<html>
  <head>
    <script type="text/javascript" src="bundle.js"></script>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

webpack.config.js

```javascript
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ]
  }
};
```

Attention, you have to use two loaders to transform CSS file. First is [CSS-loader](https://www.npmjs.com/package/css-loader) to read CSS file, and another is [Style-loader](https://www.npmjs.com/package/style-loader) to insert Style tag into HTML page. Different loaders are linked by exclamation mark(!). 注意，你得用

After launching the server, `index.html` will have internal style sheet.

```html
<head>
  <script type="text/javascript" src="bundle.js"></script>
  <style type="text/css">
    body {
      background-color: blue;
    }
  </style>
</head>
```

## Demo05: Image loader ([source](https://github.com/ruanyf/webpack-demos/tree/master/demo05))

Webpack could also require images in JS files.

main.js

```javascript
var img1 = document.createElement("img");
img1.src = require("./small.png");
document.body.appendChild(img1);

var img2 = document.createElement("img");
img2.src = require("./big.png");
document.body.appendChild(img2);
```

index.html

```html
<html>
  <body>
    <script type="text/javascript" src="bundle.js"></script>
  </body>
</html>
```

webpack.config.js

```javascript
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
    ]
  }
};
```

[url-loader](https://www.npmjs.com/package/url-loader) transforms image files. If the image size is smaller than 8192 bytes, it will be transformed into Data URL; otherwise, it will be transformed into normal URL. As you see, question mark(?) is be used to pass parameters into loaders.

After launching the server, `small.png` and `big.png` will have the following URLs.

```html
<img src="data:image/png;base64,iVBOR...uQmCC">
<img src="4853ca667a2b8b8844eb2693ac1b2578.png">
```

## Demo06: CSS Module ([source](https://github.com/ruanyf/webpack-demos/tree/master/demo06))

`css-loader?modules` (the query parameter modules) enables the [CSS Modules](https://github.com/css-modules/css-modules) spec.

It means your module's CSS is local scoped CSS by default. You can switch it off with `:global(...)` for selectors and/or rules. ([more info](https://css-modules.github.io/webpack-demo/))

index.html

```html
<html>
<body>
  <h1 class="h1">Hello World</h1>
  <h2 class="h2">Hello Webpack</h2>
  <div id="example"></div>
  <script src="./bundle.js"></script>
</body>
</html>
```

app.css

```css
.h1 {
  color:red;
}

:global(.h2) {
  color: blue;
}
```

main.jsx

```javascript
var React = require('react');
var ReactDOM = require('react-dom');
var style = require('./app.css');

ReactDOM.render(
  <div>
    <h1 className={style.h1}>Hello World</h1>
    <h2 className="h2">Hello Webpack</h2>
  </div>,
  document.getElementById('example')
);
```

webpack.config.js

```javascript
module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules'
      }
    ]
  }
};
```

Launch the server.

```bash
$ webpack-dev-server
```

Visit http://127.0.0.1:8080 , you'll find that only second `h1` is red, because its CSS is local scoped, and both `h2` is blue, because its CSS is global scoped.

## Demo07: UglifyJs Plugin ([source](https://github.com/ruanyf/webpack-demos/tree/master/demo07))

Webpack has a plugin system to expand its functions. For example, [UglifyJs Plugin](http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin) will minify output(`bundle.js`) JS codes.

main.js

```javascript
var longVariableName = 'Hello';
longVariableName += ' World';
document.write('<h1>' + longVariableName + '</h1>');
```

index.html

```html
<html>
<body>
  <script src="bundle.js"></script>
</body>
</html>
```

webpack.config.js

```javascript
var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
```

After launching the server, `main.js` will be minified into following.

```javascript
var o="Hello";o+=" World",document.write("<h1>"+o+"</h1>")
```

## Demo08: HTML Webpack Plugin and Open Browser Webpack Plugin ([source](https://github.com/ruanyf/webpack-demos/tree/master/demo08))

This demo shows you how to load 3rd-party plugins.

[html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin) could create `index.html` for you, and [open-browser-webpack-plugin](https://github.com/baldore/open-browser-webpack-plugin) could open a new browser tab when Webpack loads.

main.js

```javascript
document.write('<h1>Hello World</h1>');
```

webpack.config.js

```javascript
var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Webpack-demos',
      filename: 'index.html'
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    })
  ]
};
```

Run `webpack-dev-server`.

```bash
$ webpack-dev-server
```

Now you don't need to write `index.html` by hand and don't have to open browser by yourself. Webpack did all these things for you.

## Demo09: Environment flags ([source](https://github.com/ruanyf/webpack-demos/tree/master/demo09))

You can enable some codes only in development environment with environment flags.

main.js

```javascript
document.write('<h1>Hello World</h1>');

if (__DEV__) {
  document.write(new Date());
}
```

index.html

```html
<html>
<body>
  <script src="bundle.js"></script>
</body>
</html>
```

webpack.config.js

```javascript
var webpack = require('webpack');

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [devFlagPlugin]
};
```

Now pass environment variable into webpack.

```bash
# Linux & Mac
$ env DEBUG=true webpack-dev-server

# Windows
$ set DEBUG=true
$ webpack-dev-server
```

## Demo10: Code splitting ([source](https://github.com/ruanyf/webpack-demos/tree/master/demo10))

For big web apps it’s not efficient to put all code into a single file, Webpack allows you to split them into several chunks. Especially if some blocks of code are only required under some circumstances, these chunks could be loaded on demand.

At first, you use `require.ensure` to define a split point. ([official document](http://webpack.github.io/docs/code-splitting.html))

```javascript
// main.js
require.ensure(['./a'], function(require) {
  var content = require('./a');
  document.open();
  document.write('<h1>' + content + '</h1>');
  document.close();
});
```

`require.ensure` tells Webpack that `./a.js` should be separated from `bundle.js` and built into a single chunk file.

```javascript
// a.js
module.exports = 'Hello World';
```

Now Webpack takes care of the dependencies, output files and runtime stuff. You don't have to put any redundancy into your `index.html` and `webpack.config.js`.

```html
<html>
  <body>
    <script src="bundle.js"></script>
  </body>
</html>
```

webpack.config.js

```javascript
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  }
};
```

Launch the server.

```bash
$ webpack-dev-server
```

On the surface, you won't feel any differences. However, Webpack actually builds `main.js` and `a.js` into different chunks(`bundle.js` and `1.bundle.js`), and loads `1.bundle.js` from `bundle.js` when on demand.

## Demo11: Code splitting with bundle-loader ([source](https://github.com/ruanyf/webpack-demos/tree/master/demo11))

Another way of code splitting is using [bundle-loader](https://www.npmjs.com/package/bundle-loader).

```javascript
// main.js

// Now a.js is requested, it will be bundled into another file
var load = require('bundle-loader!./a.js');

// To wait until a.js is available (and get the exports)
//  you need to async wait for it.
load(function(file) {
  document.open();
  document.write('<h1>' + file + '</h1>');
  document.close();
});
```

`require('bundle-loader!./a.js')` tells Webpack to load `a.js` from another chunk.

Now Webpack will build `main.js` into `bundle.js`, and `a.js` into `1.bundle.js`.

## Demo12: Common chunk ([source](https://github.com/ruanyf/webpack-demos/tree/master/demo12))

When multi scripts have common chunks, you can extract the common part into a separate file with CommonsChunkPlugin.

```javascript
// main1.jsx
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <h1>Hello World</h1>,
  document.getElementById('a')
);

// main2.jsx
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <h2>Hello Webpack</h2>,
  document.getElementById('b')
);
```

index.html

```html
<html>
  <body>
    <div id="a"></div>
    <div id="b"></div>
    <script src="init.js"></script>
    <script src="bundle1.js"></script>
    <script src="bundle2.js"></script>
  </body>
</html>
```

webpack.config.js

```javascript
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
  entry: {
    bundle1: './main1.jsx',
    bundle2: './main2.jsx'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
    ]
  },
  plugins: [
    new CommonsChunkPlugin('init.js')
  ]
}
```

## Demo13: Vendor chunk ([source](https://github.com/ruanyf/webpack-demos/tree/master/demo13))

You can also extract the vendor libraries from a script into a separate file with CommonsChunkPlugin.

main.js

```javascript
var $ = require('jquery');
$('h1').text('Hello World');
```

index.html

```html
<html>
  <body>
    <h1></h1>
    <script src="vendor.js"></script>
    <script src="bundle.js"></script>
  </body>
</html>
```

webpack.config.js

```javascript
var webpack = require('webpack');

module.exports = {
  entry: {
    app: './main.js',
    vendor: ['jquery'],
  },
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.js')
  ]
};
```

If you want a module available as variable in every module, such as making $ and jQuery available in every module without writing `require("jquery")`. You should use `ProvidePlugin` ([Official doc](http://webpack.github.io/docs/shimming-modules.html)).

```javascript
// main.js
$('h1').text('Hello World');


// webpack.config.js
var webpack = require('webpack');

module.exports = {
  entry: {
    app: './main.js'
  },
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ]
};
```

## Demo14: Exposing global variables ([source](https://github.com/ruanyf/webpack-demos/tree/master/demo14))

If you want to use some global variables, and don't want to include them in the Webpack bundle, you can enable `externals` field in `webpack.config.js` ([official document](http://webpack.github.io/docs/library-and-externals.html)).

For example, we have a `data.js`.

```javascript
var data = 'Hello World';
```

We can expose `data` as a global variable.

```javascript
// webpack.config.js
module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
    ]
  },
  externals: {
    // require('data') is external and available
    //  on the global var data
    'data': 'data'
  }
};
```

Now, you require `data` as a module variable in your script. but it actually is a global variable.

```javascript
// main.jsx
var data = require('data');
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <h1>{data}</h1>,
  document.body
);
```

## Demo15: Hot Module Replacement ([source](https://github.com/ruanyf/webpack-demos/tree/master/demo15))

[Hot Module Replacement](https://github.com/webpack/docs/wiki/hot-module-replacement-with-webpack) (HMR) exchanges, adds, or removes modules while an application is running **without a page reload**.

You have [two ways](http://webpack.github.io/docs/webpack-dev-server.html#hot-module-replacement) to enable Hot Module Replacement with the webpack-dev-server.

(1) Specify `--hot` and `--inline` on the command line

```bash
$ webpack-dev-server --hot --inline
```

Meaning of the options:

- `--hot`: adds the HotModuleReplacementPlugin and switch the server to hot mode.
- `--inline`: embed the webpack-dev-server runtime into the bundle.
- `--hot --inline`: also adds the webpack/hot/dev-server entry.

(2) Modify `webpack.config.js`.

- add `new webpack.HotModuleReplacementPlugin()` to the `plugins` field
- add `webpack/hot/dev-server` and `webpack-dev-server/client?http://localhost:8080` to the `entry` field

`webpack.config.js` looks like the following.

```javascript
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './index.js'
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      },
      include: path.join(__dirname, '.')
    }]
  }
};
```

Now launch the dev server.

```bash
$ webpack-dev-server
```

Visiting http://localhost:8080, you should see 'Hello World' in your browser.

Don't close the server. Open a new terminal to edit `App.js`, and modify 'Hello World' into 'Hello Webpack'. Save it, and see what happened in the browser.

App.js

```javascript
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}
```

index.js

```javascript
import React from 'react';
import ReactDOM = require('react-dom');
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

index.html

```html
<html>
  <body>
    <div id='root'></div>
    <script src="/static/bundle.js"></script>
  </body>
</html>
```

## Demo16: React router ([source](https://github.com/ruanyf/webpack-demos/tree/master/demo16))

This demo uses webpack to build [React-router](https://github.com/rackt/react-router/blob/0.13.x/docs/guides/overview.md)'s official example.

Let's imagine a little app with a dashboard, inbox, and calendar.

```
+---------------------------------------------------------+
| +---------+ +-------+ +--------+                        |
| |Dashboard| | Inbox | |Calendar|      Logged in as Jane |
| +---------+ +-------+ +--------+                        |
+---------------------------------------------------------+
|                                                         |
|                        Dashboard                        |
|                                                         |
|                                                         |
|   +---------------------+    +----------------------+   |
|   |                     |    |                      |   |
|   | +              +    |    +--------->            |   |
|   | |              |    |    |                      |   |
|   | |   +          |    |    +------------->        |   |
|   | |   |    +     |    |    |                      |   |
|   | |   |    |     |    |    |                      |   |
|   +-+---+----+-----+----+    +----------------------+   |
|                                                         |
+---------------------------------------------------------+
```

```bash
$ webpack-dev-server --history-api-fallback
```

## Useful links 参考链接

- [Webpack docs](http://webpack.github.io/docs/)
- [webpack-howto](https://github.com/petehunt/webpack-howto), by Pete Hunt
- [Diving into Webpack](https://web-design-weekly.com/2014/09/24/diving-webpack/), by Web Design Weekly
- [Webpack and React is awesome](http://www.christianalfoni.com/articles/2014_12_13_Webpack-and-react-is-awesome), by Christian Alfoni
- [Browserify vs Webpack](https://medium.com/@housecor/browserify-vs-webpack-b3d7ca08a0a9), by Cory House
- [React Webpack cookbook](https://christianalfoni.github.io/react-webpack-cookbook/index.html), by Christian Alfoni
- [中文](http://zhaoda.net/webpack-handbook/preface.html) 


MIT
