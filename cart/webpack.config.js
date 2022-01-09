const HtmlWebpackPlugins = require('html-webpack-plugin');
const ModuleFedreationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
	mode: 'development',
	devServer: {
		port: 8082,
	},
	plugins: [
		new HtmlWebpackPlugins({
			template: './public/index.html',
		}),
		new ModuleFedreationPlugin({
			name: 'cart',
			filename: 'remoteEntry.js',
			exposes: {
				'./CartShow': './src/bootstraps',
			},

			shared: ['faker'],
		}),
	],
};
