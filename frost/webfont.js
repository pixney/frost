const plugin = require('tailwindcss/plugin')

const base = plugin(function ({ addComponents, addBase, theme }) {
    addBase({
        '@font-face': [
            {
                fontFamily: 'Inter-Thin',
                fontWeight: 400,
                src: "url('/webfont/Inter-Thin.ttf') format('ttf')"
            },
            {
                fontFamily: 'Inter-Black',
                fontWeight: 700,
                src: "url('/webfont/Inter-Black.ttf') format('ttf')"
            },
            
        ],
        
    })
})
module.exports = base