var path = require('path');
const webpack = require('webpack');
module.exports = {
  //module exports 
  entry: './src/index.js',
  //okay
     output: {
        filename: 'bundle.js',
    //filename
            path: path.resolve(__dirname, 'public')//path
  },


  watch: true,module: {loaders: [//loader
      {loader: 'babel-loader',exclude: /node_modules/,test: /\.js$/,
      //query  
      query: { //presets
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {//loader
        loader: "style-loader!css-loader",
        test: /\.css$/
      }
    ]
  }
}
