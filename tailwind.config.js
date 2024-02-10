/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgMain: "hsl(var(--bgMain))",
        bgToggle: "hsl(var(--bgToggle))",
        bgScreen: "hsl(var(--bgScreen))",
        keyBg: "hsl(var(--bgKp))",
        bgPrimary: "hsl(var(--primaryBg))",
        bgPrimaryHover: "hsl(var(--primaryBgHover))",
        primaryText: "hsl(var(--primaryText))",
        primaryShadow: "hsl(var(--primaryShadow))",
        bgSecondary: "hsl(var(--secondaryBg))",
        bgSecondaryHover: "hsl(var(--secondaryBgHover))",
        secondaryText: "hsl(var(--secondaryText))",
        secondaryShadow: "hsl(var(--secondaryShadow))",
        bgTertiary: "hsl(var(--tertiaryBg))",
        bgTertiaryHover: "hsl(var(--tertiaryBgHover))",
        tertiaryText: "hsl(var(--tertiaryText))",
        tertiaryShadow: "hsl(var(--tertiaryShadow))",
        mainText: "hsl(var(--mainTextColor))",
      },
      fontFamily: {
        leagueSpartan: "League Spartan",
      },
    },
  },
  plugins: [],
};
