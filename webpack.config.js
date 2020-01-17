const path = require('path');

module.exports = function () {
    const dev = true;

    return {
        mode: dev ? 'development' : 'production',
        entry: './app/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: dev ? 'proxy.js' : 'proxy.min.js',
            sourceMapFilename: dev ? 'proxy.map' : 'proxy.min.map',
            libraryTarget: 'umd',
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.js$/i,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                },
            ],
        },
        devServer: {
            port: 8998,
            open: true,
        },
    };
};


