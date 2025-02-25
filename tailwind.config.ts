import type { Config } from 'tailwindcss'

const config = {
  mode: 'jit',
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css}'],
  important: '#body', // Why is this important? The antdDesign is conflicting with the tailwindcss. The official solution(layer) is not working in some case(ssr or antdApp wrapper). Detail: https://github.com/ant-design/ant-design/issues/38794
  prefix: '',
  experimental: {
    optimizeUniversalDefaults: true
  },
  theme: {
    container: {
      screens: {}
    },
    extend: {
      colors: {
        text: '#423F4B',
        primary: {
          DEFAULT: '#704FE6',
          50: '#F5EFFF',
          100: '#EEE3FE',
          200: '#DEC8FE',
          300: '#BFB0F4',
          400: '#A995F0',
          500: '#8D72EB',
          600: '#704FE6',
          700: '#602DD0',
          800: '#4F25AA',
          900: '#412088'
        },
        secondary: {
          DEFAULT: '#FFD25D',
          50: '#FFF3D6',
          100: '#FFE8AD',
          200: '#FFDC85',
          300: '#FFD25D',
          400: '#F8B631',
          500: '#F79826',
          600: '#D06C1B',
          700: '#A84A17',
          800: '#853916',
          900: '#6B2F15'
        },
        tertiary: {
          DEFAULT: '#FFD0DA',
          50: '#FEEFF0',
          100: '#FEE0E3',
          200: '#FFD0DA',
          300: '#F99BA6',
          400: '#F6687B',
          500: '#ED3B56',
          600: '#D82142',
          700: '#B21936',
          800: '#911733',
          900: '#7A1731'
        },
        blue: {
          DEFAULT: '#599CF6',
          50: '#EEF5FE',
          100: '#DEEBFD'
        },
        cyan: '#33CDEA',
        purple: '#A995F0',
        green: {
          DEFAULT: '#3ECB90',
          light: '#ECFAF4'
        },
        yellow: '#F8B631',
        red: {
          DEFAULT: '#F6687B',
          light: '#FEF0F2'
        },
        gray: {
          black: '#121212',
          1: '#423F4B',
          2: '#67656F',
          3: '#8E8C93',
          light: '#F0F0F0',
          fill: '#F7F7F7'
        },
        border: {
          DEFAULT: '#D9D9D9',
          light: '#E5E5E5',
          dark: '#C4C4C4'
        },
        background: {
          DEFAULT: '#F5F4F7',
          light: '#F9FAFC',
          dark: '#E5E5E5'
        },
        link: {
          DEFAULT: '#1A73E8'
        }
      },
      fontFamily: {
        default: ['Poppins', 'sans-serif'],
        title: ['FredokaOne-Regular', 'sans-serif']
      }
    }
  },
  plugins: [
    {
      handler: params => {
        const { addBase, theme, addComponents, addUtilities } = params
        addBase({
          body: {
            fontFamily: theme('fontFamily.default'),
            color: theme('colors.text.DEFAULT'),
            fontSize: '16px'
          }
        })

        addComponents({
          '.no-before::before': {
            content: 'none !important'
          },
          '.no-after::after': {
            content: 'none !important'
          }
        })

        addUtilities({
          '.underline': {
            'text-decoration-skip-ink': 'none',
            'text-decoration-line': 'underline'
          }
        })
      }
    }
  ]
} satisfies Config

export default config
