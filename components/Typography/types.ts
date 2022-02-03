import { ColorOptions } from '../ThemeProvider/types'

const ALIGN_OPTIONS = {
  left: 'left',
  center: 'center',
  right: 'right',
  justify: 'justify'
} as const

type AlignOptions = keyof typeof ALIGN_OPTIONS

type TypographyProps = {
    /** Determines the text alignment position */
    align?: AlignOptions
    /** Determines the color of the text displayed */
    color?: ColorOptions
    /** Prevents text from wrapping into a new line */
    noWrap?: boolean
}

export { ALIGN_OPTIONS }

export type { AlignOptions, TypographyProps  }