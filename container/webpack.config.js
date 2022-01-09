const HtmlWebpackPlugins = require('html-webpack-plugin');
const ModuleFedreationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
	mode: 'development',

	devServer: {
		port: 8080,
	},
	plugins: [
		new HtmlWebpackPlugins({
			template: './public/index.html',
		}),

		new ModuleFedreationPlugin({
			name: 'container',
			remotes: {
				products: 'products@http://localhost:8081/remoteEntry.js',
				cart: 'cart@http://localhost:8082/remoteEntry.js',
			},
		}),
	],
};
