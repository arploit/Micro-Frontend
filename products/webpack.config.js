const HtmlWebpackPlugins = require('html-webpack-plugin');
const ModuleFedreationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
	mode: 'development',
	devServer: {
		port: 8081,
	},
	plugins: [
		new HtmlWebpackPlugins({
			template: './public/index.html',
		}),

		new ModuleFedreationPlugin({
			name: 'products',
			filename: 'remoteEntry.js',
			exposes: {
				'./ProductIndex': './src/bootstrap',
			},

			shared: ['faker'],
		}),
	],
};
