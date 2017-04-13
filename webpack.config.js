var path = require('path');
var webpack = require('webpack');
//var envFile = require('node-env-file');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");
var OfflinePlugin = require('offline-plugin');

//define enviroments
var PRODUCTION = process.env.NODE_ENV === 'production';
var DEVELOPMENT = process.env.NODE_ENV === 'development';
var TEST = process.env.NODE_ENV = 'test';

// // set enviroment
// try{
//   if(DEVELOPMENT || TEST) {
//       envFile(path.join(__dirname, 'config/'+process.env.NODE_ENV + '.env'));
//   } else {
//     console.log('on server no need for env file')
//   }
// } catch(e) {
//   console.log(e);
// }


//separate production and dev entries
var entry = PRODUCTION
    ?     {
            app: ['./app.jsx'],
            vendor:
            [
                'script-loader!jquery/dist/jquery.min.js',
                'script-loader!foundation-sites/dist/foundation.min.js',
                'react',
                'react-dom',
                'firebase',
                'redux',
                'react-redux',
                'react-router',
                'css-loader',
                'sass-loader',
                'script-loader',
                'react-tap-event-plugin',
                'style-loader',
                'url-loader'
            ]
          }
    :     [
            './app.jsx',
            'script-loader!jquery/dist/jquery.min.js',
            'script-loader!foundation-sites/dist/foundation.min.js',
          ];

var plugins = PRODUCTION
    ?   [
          new webpack.optimize.CommonsChunkPlugin({name:'vendor', filename: 'vendor.[hash:12].min.js'}),
          new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
          }),
          new HTMLWebpackPlugin({
            template: 'index-template.html'
          }),
          new OfflinePlugin(
            {
              updateStrategy: 'changed',
              responseStrategy: 'network-first'
            }
          )
        ]
    :
        [
          new HTMLWebpackPlugin({
            template: 'index-template.html'
          })
        ];

plugins.push(
  new webpack.DefinePlugin({
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
  }),
  new webpack.LoaderOptionsPlugin({
      minimize:true,
      debug: false,
      test: /\.scss$/,
      options: {
        sassLoader: {
          includePaths: [
            path.resolve(__dirname, './node_modules/foundation-sites/scss')
          ]
        }
      }
  })
);

var buildModule = PRODUCTION || TEST
    ?             {
                    rules:
                    [
                      {
                        test: /\.(js|jsx)$/,//find all js files
                        use: [{
                          loader: 'babel-loader',
                          options: { presets: ['react', 'es2015', 'stage-0']}
                        }],
                        exclude: /(node_modules)/
                      },
                      {
                          test: /\.scss$/,
                          use:['style-loader','css-loader','sass-loader']

                      },
                      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
                    ]
                  }
    :
                  {
                    rules:
                    [
                      {
                        test: /\.(js|jsx)$/,//find all js files
                        use: [{
                          loader: 'babel-loader',
                          options: { presets: ['react', 'es2015', 'stage-0', 'react-hmre']}
                        }],
                        exclude: /(node_modules)/
                      },
                      {
                          test: /\.scss$/,
                          use:['style-loader','css-loader','sass-loader']

                      },
                      { test: /\.(png|jpg)$/, loader: 'url-loader?name=/img/[name].[ext]' },
                      {test:  /\.json$/, use:'json-loader'}
                    ]
                  }
module.exports =  {
  node:{fs:'empty'},
  context: __dirname + '/src',
  entry: entry,
  plugins: plugins,
  output: {
    publicPath: '/public',
    filename: PRODUCTION ? '[name].[hash:12].min.js' : '[name].bundle.js',
    path:__dirname + '/public'
  },
  resolve: {
    modules:[
      'node_modules',
      './src/components'
    ],
    alias: {
      src: path.resolve(__dirname, 'src/')
    },
    extensions: [' ','.js','.jsx']
  },
  module: buildModule,
  devServer: {
    contentBase: './public',
    inline: true,
    hot: true
  },
  devtool: 'source-map'
}
