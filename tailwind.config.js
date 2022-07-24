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
  safelist: [],
  theme: {
    extend: {
      aspectRatio: {
        '4x3': '4 / 3',
      },
    },
  },
  plugins: [
    require('./frost/webfont'),
    require('./frost/base'),
    require('./frost/tailwind.grid'),
    require('./frost/components/buttons'),
    require('./frost/components/tailwind.scroller'),
    require('./frost/components/tailwind.navigation'),
    require('./frost/components/tailwind.mobileNav'),
    require('./frost/components/tailwind.hamburger'),
    //require('./frost/components/tailwind.blockTextImage')
  ],
}
