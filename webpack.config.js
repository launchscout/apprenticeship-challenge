const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const NpmInstallPlugin = require('npm-install-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
//const PATHS = {
//  app: path.join(__dirname, 'app'),
//  build: path.join(__dirname, 'build')
//};

process.env.BABEL_ENV = TARGET;

//const common = {

module.exports = {
    entry: [
//    app: PATHS.app
      'script!jquery/dist/jquery.min.js',
      'script!foundation-sites/dist/foundation.min.js',    
      './app/index.jsx'
  ],
    
    externals: {
        jquery: 'jQuery'    
    },
    
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
  resolve: {
    root: __dirname,
//    moduleDirectories: [    
//      'node_modules',
//      './app/components'
//    ],  
    
//    root: __dirname,
    alias: {
        ShoppingList: 'app/components/ShoppingList.jsx',
        Item: 'app/components/Item.jsx',
        ShoppingApp: 'app/components/ShoppingApp.jsx',
        AddItem: 'app/components/AddItem.jsx',
        ItemAPI: 'app/api/ItemAPI.jsx',
        applicationStyles: 'app/styles/main.css'
    },
    
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname,
    filename: './build/bundle.js'
  },
    
    module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
    
};


//  module: {
//    loaders: [
//      {
//        test: /\.css$/,
//        loaders: ['style', 'css'],
//        //include: PATHS.app
//      },
//      {
//        test: /\.jsx?$/,
//        loaders: ['babel?cacheDirectory'],
//        //include: PATHS.app
//      }
//    ]
//  }
//

//if(TARGET === 'start' || !TARGET) {
//  module.exports = merge(common, {
//    devtool: 'eval-source-map',
//    devServer: {
//      contentBase: PATHS.build,
//
//      historyApiFallback: true,
//      hot: true,
//      inline: true,
//      progress: true,
//
//      // display only errors to reduce the amount of output
//      stats: 'errors-only',
//
//      // parse host and port from env so this is easy
//      // to customize
//      host: process.env.HOST,
//      port: process.env.PORT
//    },
//    plugins: [
//      new webpack.HotModuleReplacementPlugin(),
//      new NpmInstallPlugin({
//        save: true // --save
//      })
//    ]
//  });
//}
//
//if(TARGET === 'build') {
//  module.exports = merge(common, {});
//}
