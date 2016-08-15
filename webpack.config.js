var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
	devtool: debug ? "inline-sourcemap" : null,
    entry: "./scripts.js",
    output: {
        path: __dirname,
        filename: "scripts.min.js"
    },
    module: {
	  loaders: [
	    {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel', // 'babel-loader' is also a legal name to reference
	      query: {
	        presets: ['es2015','react']
	      }
	    },
	    {
	    	test: /\.css$/,
	    	loader: "style!css"
	    }
	  ]
	},
	plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
	],
};
