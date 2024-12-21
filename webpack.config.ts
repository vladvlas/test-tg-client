import webpack from "webpack";
import {buildWebpackConfig} from "./config/buildWebpack/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/buildWebpack/types/config";
import path from "path";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
  src: path.resolve(__dirname, "src"),
};

export default (env: BuildEnv) => {
    const mode = env.mode || "development";
    const PORT = env.port || 3000;
    const isDev = mode === "development";

    const config: webpack.Configuration  = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    });

    return config;
};