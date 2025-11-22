const path = require('path');

module.exports = {
  entry: {
    app: './assets/js/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/app.js',
  },
};
