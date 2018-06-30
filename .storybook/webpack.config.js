module.exports = ( baseConfig, env, defaultConfig ) => {
  defaultConfig.module.rules.push( {
    test: /\.less$/,
    use: [
      'style-loader',
      'css-loader',
      'less-loader'
    ]
  } )

  defaultConfig.module.rules.unshift( {
    test: /stories\.js$/,
    loaders: [ require.resolve( '@storybook/addon-storysource/loader' ) ],
    enforce: 'pre',
  } )

  return defaultConfig
}
