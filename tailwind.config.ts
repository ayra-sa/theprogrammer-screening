import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      fontFamily: {
        dm_mono: ['var(--font-dm_mono)'],
        ibm_plex: ['var(--font-ibm_plex_sans)'],
      },
      colors: {
        primary: '#84EC8E',
        secondary: '#1C2012',
        background: '#03090E',
        navbar: '#0F1416',
        cardHover: '#0A1319',
        footer: '#12181D',
        footerText: 'hsla(0, 0%, 100%, 0.73)'
      }
    },
  },
  plugins: [],
}
export default config
