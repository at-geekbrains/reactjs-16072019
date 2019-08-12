const path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	mode: 'development',
	module: {
		rules: 
		[
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: "/node_modules/"
			},
			{
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
			}
		]
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		historyApiFallback: true
	}
}