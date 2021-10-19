const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/Components/Main/Main.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	optimization: {
		minimizer: [new TerserPlugin({ extractComments: false })],
	},
	resolve: {
		alias: {
			General: path.resolve(__dirname, 'public'),
		},
		extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				loader: 'ts-loader',
			},
			{
				test: /\.(woff|woff2|ttf|eof)$/,
				type: 'asset/resource',
				generator: {
					filename: './assets/fonts/[name][ext]'
				}
			},
			{
				test: /\.(jpg|png|svg|gif|ico|icns)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
				}
			},
			{
				test: /\.(scss|css)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({ 
			template: path.resolve(__dirname, 'src', 'index.html')
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: 'public/assets', to: 'assets' },
			]
		})
	],
};
