export const babelLoader = () => ({
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
});
