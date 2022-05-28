const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '.c-scroller': {
      opacity: 0,
      transition: 'opacity 0ms',
      overflowX: 'hidden',
      paddingTop: theme('spacing.4'),
      paddingBottom: theme('spacing.4'),
      display: 'flex'
    },
    '.c-scroller.-ready': {
      transition: 'opacity 700ms',
      opacity: 1
    },

    '.c-scroller__list': {
      display: 'flex'
    },
    '.c-scroller__original': {
      display: 'flex'
    },
    '.c-scroller__item': {
      whiteSpace: 'nowrap',
      display: 'flex',
      alignItems: 'center',
      paddingRight: theme('spacing.4')
    },
    '.c-scroller__list.-animate': {
      justifyContent: 'space-around',
      alignItems: 'center',
      display: 'flex',
      opacity: 1,
      animationName: 'frost-scroller-left',
      animationDuration: 'var(--scroller-x-speed,80s)',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
      animationPlayState: 'running',
      animationDelay: '0s',
      willChange: 'transform'
    },
    '@keyframes frost-scroller-right': {
      '0%': {
        transform: 'translate3d(-100%, 0px, 0px)'
      },
      '100%': {
        transform: 'translate3d(0px, 0px, 0px)'
      }
    },
    '@keyframes frost-scroller-left': {
      '0%': {
        transform: 'translate3d(0px, 0px, 0px)'
      },
      '100%': {
        transform: 'translate3d(-100%, 0px, 0px)'
      }
    }

  })
})
