export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#000000',
                foreground: '#ffffff',
                muted: 'rgb(156, 163, 175)',
                primary: '#ffffff',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)' },
                    '100%': { boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)' },
                }
            }
        },
    },
    plugins: [],
}
