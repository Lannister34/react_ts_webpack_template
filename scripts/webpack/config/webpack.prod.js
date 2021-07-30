import merge from 'webpack-merge';
import { resolve } from "path";
import { path as PROJECT_ROOT } from 'app-root-path';
import * as modules from '../modules';

export const prodConfig = () => {
    return merge(
        {
            mode: 'production',
            target: 'web',
            devtool: false,
            entry: ['./src/index.tsx'],
            output: {
                path: resolve(PROJECT_ROOT + '/dist'),
                publicPath: '/',
                hashDigestLength: 7,
                filename: 'js/[name].[contenthash].bundle.js',
                chunkFilename: 'js/[name].[contenthash].chunk.js',
            },
            resolve: {
                extensions: ['.js', '.ts', '.tsx'],
            },
            performance: {
                maxEntrypointSize: 500000,
                maxAssetSize: 500000,
            },
        },
        modules.babelLoader(),
        modules.assetsLoader(),
        modules.dotenvPlugin(),
        modules.htmlPlugin(),
        modules.optimizationBuild(),
        modules.cleanFilePlugin(),
    );
};
