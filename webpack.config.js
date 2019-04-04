const path = require('path')

const publicPath = path.join(__dirname, 'public')

module.exports = (env) => {
    const isProduction = env === 'production'

    return {
        entry: './src/app.js',
        output: {
            path: publicPath,
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                },
                {
                    test: /\.s?css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
        mode: 'development',
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: publicPath,
            historyApiFallback: true,
            port: 8080
        }
    }
}