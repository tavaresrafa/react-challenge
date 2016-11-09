'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

module.exports = validate ({
	devtool: 'source-map',

	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		path.join(__dirname, 'src/assets/js', 'index')
	],

	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist/'
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin()
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
