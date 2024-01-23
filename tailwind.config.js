/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                blue: {
                    700: "#175CD3",
                },
                white: {
                    100: "#ffffff",
                },
                gray: {
                    50:"#F9FAFB",
                    100: "#F2F4F7",
                    300: "#D0D5DD",
                    400: "#98A2B3",
                    500:"#667085",
                    600: "#475467",
                    700:"#344054",
                    800: "#1D2939",
                    900: "#101828",
                    
                },
            },
            fontSize: {
                "2xl": ["64px", "72px"],
                xl: ["48px", "60px"],
                "2lg": ["44px", "60px"],
                lg: ["24px", "32px"],
                md: ["20px", "30px"],
                "2sm": ["18px", "28px"],
                sm: ["16px", "24px"],
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                
            },
            backgroundImage: {
                headerBackground:
                    "url('/src/assets/images/Backgroundpattern.png')",
                
            },
        },
    },
    plugins: [],
}
