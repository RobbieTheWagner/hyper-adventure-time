exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    borderColor: '#292957',
    cursorColor: '#f3c947',
    foregroundColor: '#fae2cc',
    backgroundColor: '#292957',
    colors: [
      // Normal Colors
      '#040303', // black
      '#cb1c17', // red
      '#57bb1e', // green
      '#ee8826', // yellow
      '#0e62d1', // blue
      '#7a6fa4', // magenta
      '#81b3a8', // cyan
      '#fae2cc', // white
      // Bright Colors
      '#6090cb', // black
      '#ff776d', // red
      '#abfb81', // green
      '#f3ca20', // yellow
      '#11a7d1', // blue
      '#ac6e65', // magenta
      '#d1faf6', // cyan
      '#f8f7fc' // white
    ],
    css: `
      ${config.css || ''}
      .tab_active:before {
        border-color: #11a7d1;
      }
    `
  });
}
