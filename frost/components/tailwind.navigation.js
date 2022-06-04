const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '.c-navigation': {
      position: 'fixed',
      display: 'flex',
      justifyContent: 'space-between',
      zIndex: 40,
      padding: theme('spacing.3'),
      top: 0,
      left: 0,
      width: '100%'
    },
    '.c-navigation__logo': {
      width: 'auto',
      height: '50px',
      [`@media (min-width: ${theme('screens.md')})`]: {
        height: 'auto',
        width: '150px'
      }
    },
    '.c-navigation__wrapper': {
      width: 'auto',
      display: 'flex',
      justifyContent: 'flex-end',
      [`@media (min-width: ${theme('screens.md')})`]: {
        width: '100%'
      }
    },
    '.c-navigation__desktopNav': {
      display: 'none',
      [`@media (min-width: ${theme('screens.md')})`]: {
        width: '100%',
        display: 'flex'
      }
    },
    '.c-navigation__hamburgerWrapper': {
      // md:w-[50px] md:hidden
      [`@media (min-width: ${theme('screens.md')})`]: {
        display: 'none'

      }
    }
  })
})