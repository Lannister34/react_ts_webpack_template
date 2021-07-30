import merge from 'webpack-merge';
import { path as PROJECT_ROOT } from 'app-root-path';
import { resolve } from 'path';
import * as modules from '../modules';

export const devConfig = () => {
    return merge(
        {
            mode: 'development',
            target: 'web',
            devtool: 'cheap-module-source-map',
            entry: ['./src/index.tsx'],
            output: {
                filename: 'js/[name].[contenthash].bundle.js',
                chunkFilename: 'js/[name].[contenthash].chunk.js',
            },
            resolve: {
                extensions: ['.js', '.ts', '.tsx'],
            },
        },
        modules.babelLoader(),
        modules.assetsLoader(),
        modules.dotenvPlugin(),
        modules.htmlPlugin()
    );
};
