const COLOR_OPTIONS = {
  black: '#111111',
  darkGrey: '#666666',
  lightGrey: '#EAEAEA',
  midGrey: '#999999',
  primary: '#254F85',
  secondary: '#333333',
  tertiary: '#1076F9',
  white: '#FAFAFA'
} as const

type ColorOptions = keyof typeof COLOR_OPTIONS

type Theme = {
  colors: Record<ColorOptions, string>
}

export { COLOR_OPTIONS }

export type { Theme, ColorOptions }