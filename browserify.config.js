import browserify from 'browserify';

export default browserify({
  entries: ['./node_modules/react/index.js', './node_modules/react-dom/index.js'],
  output: './public/bundle.js',
});
