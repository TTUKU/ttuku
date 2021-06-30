const path = require('path')

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({
                                  webpackConfig,
                                }) => {
          webpackConfig.output.path = path.join(__dirname, 'build');
          return webpackConfig;
        }
      },
      options: {}
    }
  ]
}