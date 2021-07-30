import DevServer from "webpack-dev-server";
import webpack from "webpack";
import chalk from "chalk";
import { devConfig } from "./config/webpack.dev";

const HOST = "localhost"; // if run in docker 0.0.0.0
const PORT = 4000;
const compiler = webpack(devConfig());

const devServer = new DevServer(compiler, {
    host: HOST,
    port: PORT,
    historyApiFallback: true,
    overlay: true,
    hot: true,
    noInfo: true,
    compress: true,
    clientLogLevel: "none",
});

devServer.listen(PORT, HOST, () => {
    console.log(
        `${chalk.greenBright("Server is running")} ${chalk.blueBright(`http://${HOST}:${PORT}`)}`
    );
});
