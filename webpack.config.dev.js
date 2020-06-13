import path from 'path';

export default {
	debug: true,
	devtool: 'inline-source-map',
	noInfo: false,
	entry: [
		path.resolve(__dirname, 'src/index')
	],
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'src'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [],
	modeles: {
		loaders: [
			{test: /\.js$/, exclude: /node_modeles/, loader: {'babel'}},
			{test: /\.css$/, loaders: ['style', 'css']}
		]
	}
}
