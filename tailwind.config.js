module.exports = {
  content: [
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html"
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'h5, h6': {
              color: theme('colors.emerald.700'),
              fontWeight: 'bold',
              fontFamily: theme('fontFamily.serif')
            },
            'h1 strong': {
              color: `${theme('colors.emerald.700')} !important`,
            },
            'a': {
              color: theme('colors.white'),
              fontWeight: 'bold',
            }
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ]
}
