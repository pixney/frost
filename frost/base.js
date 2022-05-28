const plugin = require('tailwindcss/plugin')

const base = plugin(function ({ addComponents, addBase, theme }) {
    addBase({
        'strong':{
            fontWeight:theme('fontWeight.bold')
        },
        '*':{
            fontWeight:theme('fontWeight.normal')
        },
        'button':{

        },
        'a':{
            
        }
    })
})
module.exports = base