/** @type {import("tailwindcss").Config} */
const config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {
    container: {
      center: true
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      fontFamily: {
        sans: ["var(--gt-walsheim-pro)"]
      }
    }
  },
  plugins: [
    // eslint-disable-next-line global-require
    require("tailwindcss-animate")
  ]
}

export default config
