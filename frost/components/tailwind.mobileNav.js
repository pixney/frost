const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '.c-mobileNav': {
      position: 'fixed',
      zIndex: 30,
      background: '#eee',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      [`@media (min-width: ${theme('screens.md')})`]: {
        display: 'none'
      }
    },
    '.c-mobileNav__inner': {
      padding: theme('spacing.3'),
      width: '100%',
      height: '100%',
      overflowY: 'scroll'
    },
    '.c-mobileNav__socialMedia': {
      position: 'fixed',
      bottom: theme('spacing.3'),
      right: theme('spacing.3')
    },
    '.c-mobileNav__socialMediaList': {
      display: 'flex'
    },
    '.c-mobileNav__socialMediaList li': {
      marginLeft: theme('spacing.3'),
      marginRight: theme('spacing.3')
    }

  })
})