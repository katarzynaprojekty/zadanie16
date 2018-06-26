const path = require('path');

module.exports = (env) => {
    const environment = env || 'production';

    return {
        mode: environment,
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'app.bundle.js'
        },
        optimization: {
            minimize: false
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: "babel-loader"
                },
                {
                    test: /\.css$/,
                    use:[
                            { loader: 'style-loader'},
                            {
                                loader: 'css-loader',
                                options: { modules: true}
                            }
                        ]
                }
            ]
        }
    }
};