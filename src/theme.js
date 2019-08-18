// houses any variables to be consumed
export default {
  colors: {
    teal: "#42d9c8",
    white: "#fff",
    lightBlue: "#E8F2FF",
    mediumBlue: "#4F73DD",
    blue: "#5B7DDF",
    darkBlue: "#2F4EA9",
    red: "#ED494A",
    salmonRed: "#FC6E62",
    grey: "#474646",
    jet: "#474646",
    black: "#0F0D0C"
  },
  fontFamily: {
    primary: "Ubuntu, sans-serif",
    // primary: "Maven Pro, sans-serif",
    // primary: "Asap, sans-serif",
    secondary: "Maven Pro, sans-serif",
    terciary: "Futura, sans-serif",
    monospace: '"Courier New", Courier, monospace'
  },
  fontWeight: {
    light: "300",
    medium: "500",
    bold: "700"
  },
  shadows: {
    card: "0 0 4px rgba(0, 0, 0, 0.125)"
  },
  variants: {
    card: {
      p: 2,
      bg: "background",
      boxShadow: "card",
      borderRadius: 2
    },
    badge: {
      display: "inline-block",
      p: 1,
      color: "white",
      bg: "primary",
      borderRadius: 2
    }
  }
};
