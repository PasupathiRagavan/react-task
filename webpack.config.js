const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader']
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader", "postcss-loader",
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
				{
					loader: 'file-loader',
					options: {
						name: 'src/assets/images/[name].[ext]',
					},
				},
				],
			},
		]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
			favicon: './src/assets/images/logo.png'
        }), 
        new MiniCssExtractPlugin({
            filename: "styles.css",
            chunkFilename: "styles.css"
        }),
    ]
};