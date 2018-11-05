const webpackMerge = require('webpack-merge');

module.exports = env => {
  const { presets } = env;
  // we could get an array of strings or an array
  // of arrays, so this bellow will flatten the structure into an array of strings
  /** @type {string[]} */
  const mergedPresets = [].concat(...[presets]);
  const mergedConfigs = mergedPresets.map(presetName =>
    require(`./presets/webpack.${presetName}`)(env) // call the present and pass env
  );
  return webpackMerge({}, ...mergedConfigs);
};
