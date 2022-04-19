const path = require('path');
module.exports = {
	entry: "./src/js/app.js",
	output: {
		// filename: "../js/script.js",
		path: path.resolve(__dirname, 'js'), //出力ファイルのディレクトリの絶対パス
		filename: 'script.js' //出力ファイルの名前
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
		],
	},
};
