import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import Dotenv from 'dotenv-webpack';

export const htmlPlugin = () => ({
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
});

export const cleanFilePlugin = () => ({
    plugins: [
        new CleanWebpackPlugin({
            verbose: true,
        }),
    ],
});

export const dotenvPlugin = () => ({
    plugins: [new Dotenv()],
});

