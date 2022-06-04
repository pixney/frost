const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '.c-hamburger': {
      width: '50px',
      height: '50px',
      padding: '10px 10px'
    },
    '.c-hamburger__line': {
      position: 'relative',
      display: 'block',
      width: '100%',
      height: '2px',
      background: '#000',

      '&.-top': {
        transform: 'translateY(-8px)',
        transition: 'transform 200ms',
        transformOrigin: 'top left'
      },
      '&.-center': {
        transition: 'width 150ms',
        margin: '0 auto'
      },
      '&.-bottom': {
        transform: 'translateY(8px)',
        transition: 'transform 200ms',
        transformOrigin: 'bottom left'

      }
    },
    '.c-hamburger.-active .c-hamburger__line.-center': {
      width: '0px'
    },
    '.c-hamburger.-active .c-hamburger__line.-top': {
      transform: 'translateY(-11px) translateX(4px) rotate(45deg)',
      width: '35px'
    },
    '.c-hamburger.-active .c-hamburger__line.-bottom': {
      transform: 'translateY(10px) translateX(3px) rotate(-45deg)',
      width: '36px'
    }

  })
})