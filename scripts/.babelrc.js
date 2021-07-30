module.exports = (api) => {
  const env = api.env();
  api.cache.never();
  // index.cache.using(() => env === 'development');

  const plugins = ["dynamic-import-node"];

  return {
    presets: [
      [
        "@babel/env",
        {
          useBuiltIns: "usage",
          debug: false,
          shippedProposals: true,
          spec: true,
          loose: false,
          corejs: 3,
          targets: {
            node: "current",
          },
        },
      ],
    ],
    plugins,
  };
};
