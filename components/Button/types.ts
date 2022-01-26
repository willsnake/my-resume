const VARIANTS_MAP = {
  primary: 'primary',
  secondary: 'secondary',
} as const

type Variant = keyof typeof VARIANTS_MAP

export { Variant, VARIANTS_MAP };