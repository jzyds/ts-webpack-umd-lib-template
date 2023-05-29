const path = require("path");

module.exports = {
  entry: {
    lib: "./src/lib.ts",
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    library: "[name]",
    libraryTarget: "umd",
    globalObject: "this",
  },
  optimization: {
    // We no not want to minimize our code.
    minimize: true,
  },
  mode: "production",
};
