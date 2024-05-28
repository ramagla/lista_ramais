module.exports = {
  // ... outras configurações ...
  module: {
    rules: [
      // ... outras regras ...
      {
        test: /\.(xlsx|xls)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "static/media/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },
};
