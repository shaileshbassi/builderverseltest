/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "color-text-gray": "#333",
        "color-add-gray": "#cbcbcb",
        "color-white": "#fff",
        "color-dark-gray": "#626469",
        "color-footer-green-disabled": "hsla(0,0%,69%,0.4)",
        "color-footer-green": "#009e4d",
        "color-light-gray": "#9fa0a4",
        "color-footer-green-disabled-text": "#f2f2f2",
        "color-life-green": "#3dcd58",
        "color-sky-blue": "#42b4e6",
        "color-bg-gray": "#fafafa",
        "color-footer-gray": "#e7e6e6",
      },
      fontSize: {
        'xs': '0.75rem', // 12px
        'sm': '0.875rem', // 14px
        'base': '1rem', // 16px (default)
        'lg': '1.125rem', // 18px
        'xl': '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '2rem', //32px
        // Add more sizes as needed
      },
    },
    screens: {
      'sm': "640px", // => @media (min-width: 640px) { ... }
      'md': "786px", // => @media (min-width: 768px) { ... }
      'lg': "1024px", // => @media (min-width: 1024px) { ... }
      'xl': "1200px", // => @media (min-width: 1280px) { ... }
      '2xl': "1536px", // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      'button-text': 'seCustomIconFont,sans-serif'
    },
    lineHeight: {
      'none': '1', // No additional leading
      'tight': '1.25', // Tight line height
      'snug': '1.375', // Snug line height
      'normal': '1.5', // Normal line height (default)
      'relaxed': '1.625', // Relaxed line height
      'loose': '2', // Loose line height
      // Add more line heights as needed
    }
  },
  plugins: [],
};
