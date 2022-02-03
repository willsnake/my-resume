const ALIGN_OPTIONS = {
  left: 'left',
  center: 'center',
    right: 'right',
    justify: 'justify'
} as const

type AlignOptions = keyof typeof ALIGN_OPTIONS

interface TypographyProps {
    /** Determines the text alignment position */
    align?: AlignOptions
    /** Determines the color of the text displayed */
    color?: string
    /** Prevents text from wrapping into a new line */
    noWrap?: boolean
}

export { ALIGN_OPTIONS }

export type { AlignOptions, TypographyProps  }