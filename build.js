const fs = require('fs');
const postcss = require('postcss');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

fs.readFile('src/style.css', (err, css) => {
  postcss([precss, autoprefixer])
    .process(css, { from: 'src/style.css', to: 'dist/style.css' })
    .then(result => {
      fs.writeFile('dist/style.css', result.css);
      if ( result.map ) fs.writeFile('dist/style.css.map', result.map);
    });
});
