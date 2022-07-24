const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        '.c-blockTextImage': {

        },
        '.c-blockTextImage__imageWrapper': {
            position: 'relative',
            minHeight: '30vh',
        },
        '.c-blockTextImage img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',


            [`@media (min-width: ${theme('screens.md')})`]: {

            },
            [`@media (min-width: ${theme('screens.lg')})`]: {

            },
            [`@media (min-width: ${theme('screens.xl')})`]: {

            }
        },
    })
})
