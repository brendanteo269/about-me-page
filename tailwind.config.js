/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            keyframes: {
                typing: {
                    "0%": {
                        width: "0%"
                    },
                    "20%": {
                        width: "100%"
                    },
                    "100%": {
                        width: "100%"
                    }
                },
                blink: {
                    "50%": {
                        borderColor: "transparent"
                    },
                    "100%": {
                        borderColor: "black"
                    }
                },
                bounce: {
                    "0%, 100%": {
                        transform: "translateY(0)"
                    },
                    "50%": {
                        transform: "translateY(-5px)"
                    }
                },
                slideLeft: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-10px)' }
                }
            },
            animation: {
                typing: "typing 8s steps(20) infinite, blink .7s infinite",
                bounce: "bounce 2s ease-in-out infinite",
                slideLeft: 'slideLeft 0.3s ease-in-out forwards'
            }
        },
    },
    plugins: [],
} 