/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        customPrimary: "rgb(32, 92, 250, 0.8)",
        customSecondary: "rgb(161, 163, 247)",
        customTercery: "rgb(2, 92, 250, 0.6)",
        customDarkBg1: "rgb(255, 255, 255)",
        customDarkBg2: "rgb(2, 92, 250, 0.6)",
        customDarkBg3: "rgb(255, 255, 255)",
        customDarkBg3Hover: "rgb(55, 56, 62)",
        customContentSubtitle: "rgb(178, 184, 205)",
        customGrayBorder: "rgb(255,255,255,0.1)",
        customGrayText: "rgb(174, 178, 183)",
        customDarkBgTransparent: "rgb(31, 32, 35, 0.7)",
        customDarkBgTransparentDarker: "rgb(0,0,0,0.5)",
        customDarkBgTransparentLighter: "rgb(48, 49, 54, 0.7)",
        customNobuColor: "rgb(32, 92, 250)",
        customWhite: "rgb(255, 255, 255, 1)",
        customNobuGreen: "rgb(11, 219, 144)",
        customGray: "rgb(241, 242, 246)",
      },
      fontFamily: {
        Inter: "Inter",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, rgb(11, 219, 144), rgb(32, 92, 250, 0.8))',
      },
      screens: {
        xs: "530px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xll: "1400px",
        "2xl": "1536px",
      },
    },
  },
};
