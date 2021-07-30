import webpack from "webpack";
import chalk from "chalk";
import { prodConfig } from "./config/webpack.prod";

const compiler = webpack(prodConfig());

compiler.run((err, stats) => {
    if (err) {
        console.error(err.stack || err);
        return null;
    }

    const info = stats.toString({
        hash: true,
        modules: false,
        version: true,
        colors: true,
        entrypoints: false,
    });

    console.log(chalk.greenBright("=====[Build completed]====="));
    console.log(info);

    if (stats.hasErrors()) {
        console.log(chalk.redBright("=====[Errors]====="));
        console.log(info);
    }

    if (stats.hasWarnings()) {
        console.log(chalk.yellowBright("=====[Warnings]====="));
        console.log(info);
    }
});
