export const optimizationBuild = () => ({
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 30000,
            maxSize: 488000,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            cacheGroups: {
                vendors: {
                    test: /node_modules/,
                    priority: -10,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
        runtimeChunk: true,
    },
});
