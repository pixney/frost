const plugin = require('tailwindcss/plugin')

const base = plugin(function ({ addComponents, addBase, theme }) {
    addComponents({
        'c-button':{
            fontWeight:theme('fontWeight.bold')
        },
    })
})
module.exports = base