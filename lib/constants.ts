export const colors = {
  primary: {
    DEFAULT: '#000000',
    foreground: '#FFFFFF',
  },
  secondary: {
    DEFAULT: '#FFFFFF',
    foreground: '#000000',
  },
  text: {
    DEFAULT: '#000000',
    inverse: '#FFFFFF',
    subtle: '#5A5A5A',
  },
  accent: {
    DEFAULT: '#E5332A',
  },
  border: {
    light: '#EAEAEA',
    dark: '#000000',
  },
} as const

export const typography = {
  fontFamily: {
    sans: ['General Sans', 'Helvetica', 'Arial', 'sans-serif'],
  },
  fontSize: {
    base: '16px',
    h1: {
      mobile: '3rem',
      tablet: '4rem',
      desktop: '6rem',
    },
    h2: {
      mobile: '2rem',
      tablet: '3rem',
      desktop: '4rem',
    },
    h3: {
      mobile: '1.5rem',
      tablet: '1.75rem',
      desktop: '1.75rem',
    },
  },
} as const

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1440px',
} as const

export const layout = {
  containerMaxWidth: '1440px',
  padding: {
    mobile: '1rem',
    tablet: '2rem',
    desktop: '4rem',
  },
  sectionGap: '80px',
} as const