module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "792px",
      md: "955px",
      lg: "1090px",
      xl: "1440px",
    },
    extend: {
      colors: {
        darkpurple: "#24053E",
        lightpurple: "#584D62",
        greenish: "#44FFA1",
        ghost: "#FCF8FF",
      },
      fontFamily: {
        serif: ["Fraunces", "sans-serif"],
      },
    },
  },
  plugins: [],
};
