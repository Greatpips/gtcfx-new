// tailwind.config.js
export default {
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        slide: "slide 2s linear infinite",
      },
    },
  },
  plugins: [],
};
