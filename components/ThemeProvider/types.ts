const COLOR_OPTIONS = {
  black: 'black',
  darkGrey: 'darkGrey',
  lightGrey: 'lightGrey',
  midGrey: 'midGrey',
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  white: 'white'
} as const

type ColorOptions = keyof typeof COLOR_OPTIONS

type Theme = {
  colors: Record<ColorOptions, string>
}

export { COLOR_OPTIONS }

export type { Theme, ColorOptions }