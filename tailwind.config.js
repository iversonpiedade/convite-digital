module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
      spacing:{
        "119":"19px",
        "115":"15px",
        "100":"100vh",
        "113":"113px",
        "451":"451px"
      },
      backgroundImage: {
        'bg' : "url('/party.png')",
        "bgsm":"url('/partysm.png')"
      },
      
      backgroundSize: {
        '100': '1px',
        '16': '4rem',
      }

    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
   
    fontFamily: {
      body: ["Inter", "ui-sans-serif", "Roboto"],
    },
  },
  plugins: [
    // ...
    require("@tailwindcss/forms"),
  ],
};
