'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

module.exports = validate ({

	entry: path.join(__dirname, 'src/assets/js', 'index'),

	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: { warnings: false }
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),

	],

	module: {
		preLoaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			include: /js/,
			loader: 'standard'

		}],

		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				include: /js/,
				loader: 'babel'
			},
			{
				test: /\.s(a|c)ss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}
		]
	}
})
