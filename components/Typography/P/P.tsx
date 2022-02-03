import React, {
  ComponentPropsWithoutRef,
  ReactNode,
  useContext
} from 'react'
import { ThemeContext } from 'styled-components'
import { ColorOptions } from '../../ThemeProvider/types'
import { TypographyProps } from '../types'
import { StyledP } from './styles'

interface IPProps extends ComponentPropsWithoutRef<'p'>, TypographyProps {
  /** Any renderable React child, such as an element, string, or fragment */
  children?: ReactNode
  /** The color of the font we want to display  */
  color?: Extract<ColorOptions, 'darkGrey'| 'lightGrey'>
}

const P = ({
  align = 'left',
  children,
  color = 'darkGrey',
  noWrap = false,
}: IPProps) => {
  const themeContext = useContext(ThemeContext)

  return (
    <StyledP
      align={align}
      color={color}
      noWrap={noWrap}
      theme={themeContext}
    >
      {children}
    </StyledP>
  )
}

export { P }
export type { IPProps as PProps }
