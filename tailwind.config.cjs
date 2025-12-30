/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "var(--border-medium)",
                input: "var(--border-light)",
                ring: "var(--accent-primary)",
                background: "var(--bg-primary)",
                foreground: "var(--text-primary)",
                primary: {
                    DEFAULT: "var(--accent-primary)",
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "var(--accent-secondary)",
                    foreground: "var(--text-primary)",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "var(--bg-tertiary)",
                    foreground: "var(--text-tertiary)",
                },
                accent: {
                    DEFAULT: "var(--bg-accent)",
                    foreground: "var(--text-secondary)",
                },
                popover: {
                    DEFAULT: "var(--bg-primary)",
                    foreground: "var(--text-primary)",
                },
                card: {
                    DEFAULT: "var(--bg-secondary)",
                    foreground: "var(--text-primary)",
                },
            },
            borderRadius: {
                lg: "var(--radius-lg)",
                md: "var(--radius-md)",
                sm: "var(--radius-sm)",
            },
            fontFamily: {
                display: ["var(--font-display)"],
                sans: ["var(--font-sans)"],
                mono: ["var(--font-mono)"],
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
}
