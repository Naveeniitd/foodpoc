/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#272727",
          "200": "rgba(38, 25, 0, 0.6)",
          "300": "rgba(255, 255, 255, 0.1)",
        },
        lightgray: {
          "100": "#d5d5d5",
          "200": "rgba(213, 213, 213, 0.6)",
          "300": "rgba(213, 213, 213, 0.4)",
        },
        dimgray: "#676767",
        darkgreen: "rgba(11, 90, 11, 0.6)",
        navajowhite: "#ffe1a8",
        khaki: "#ffcf71",
        steelblue: "#61a6e5",
        limegreen: "#53f253",
        white: "#fff",
        whitesmoke: "#efefef",
        darkgray: {
          "100": "#ababab",
          "200": "#9f9f9f",
        },
        darkslategray: "#373737",
      },
      fontFamily: {
        sansation: "Sansation",
      },
      borderRadius: {
        "base-6": "15.6px",
        xs: "12px",
        "11xl": "30px",
        "10xl-5": "29.5px",
        "2xs-9": "10.9px",
      },
    },
    fontSize: {
      "3xs": "10px",
      xs: "12px",
      "5xs": "8px",
      "smi-7": "12.7px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
