export const assetsLoader = () => ({
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff(2)?|svg)$/,
                type: "asset/inline",
            },
        ],
    },
});
