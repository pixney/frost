const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        '.c-container': {
            maxWidth: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingRight: theme('spacing.4'),
            paddingLeft: theme('spacing.4'),
            [`@media (min-width: ${theme('screens.md')})`]: {
                maxWidth: theme('screens.md'),
            },
            [`@media (min-width: ${theme('screens.lg')})`]: {
                maxWidth: theme('screens.lg'),
            },
            [`@media (min-width: ${theme('screens.xl')})`]: {
                maxWidth: theme('screens.xl'),
            }
        },
    })
})