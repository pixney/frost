/**
 * @see https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('./frost/webfont'),
    require('./frost/base'),
    require('./frost/components/buttons'),
    require('./frost/components/tailwind.scroller')
  ],
}
