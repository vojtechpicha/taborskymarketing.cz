/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./ochrana-osobnich-udaju.html"],
    theme: {
        extend: {
            colors: {
                background: '#0c0e16',
                gold: {
                    DEFAULT: '#d4af37',
                    light: '#f5d76e',
                    glow: 'rgba(212, 175, 55, 0.3)',
                    glowHover: 'rgba(212, 175, 55, 0.4)',
                },
                surface: '#151828',
            },
            fontFamily: {
                sans: ['Sora', 'sans-serif'],
            },
            boxShadow: {
                'gold-glow': '0 4px 20px 0 rgba(212, 175, 55, 0.3)',
                'gold-glow-hover': '0 8px 30px rgba(212, 175, 55, 0.4)',
            }
        },
    },
    plugins: [],
}
