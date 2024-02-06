/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inpact: "inpact",
        inter: "inter"
      },
      colors: {
        brend: {
          black: "#19171A",
          gray: "#605A63",
          "#646464": "#646464",
          "#878787": "#878787",
          "#F50B0C": "#F50B0C",
          "#3890CF": "#3890CF",
          "#2C2E33": "#2C2E33",
          "#FF0000": "#FF0000",
          "#F5F6F7": "#F5F6F7"
        }
      },
      borderRadius: {
        "87px": "87px"
      },
      fontSize: {
        "44px": "44px",
        "50px": "50px"
      },
      backgroundImage: {
        'arrow-card': 'linear-gradient(112deg, #FF7979 17.34%, #C20000 85.64%)',
      },
      dropShadow: {
        arrow: '8px 12px 77px rgba(0, 30, 47, 0.16)',
        shadow: '0px 6px 33px rgba(0, 30, 47, 0.08)'
      },
      margin: {
        19: "76px"
      }
    },
  },
  plugins: [],

}

