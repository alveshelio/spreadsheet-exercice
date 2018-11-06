module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.ts|\.tsx$/,
        loaders : ['babel-loader', 'awesome-typescript-loader'],
        exclude: /node_modules/,

      },
    ],
  },
});
