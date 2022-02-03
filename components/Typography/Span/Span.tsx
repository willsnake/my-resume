import React, {
  ComponentPropsWithoutRef,
  ReactNode,
  useContext
} from 'react'
import { ThemeContext } from 'styled-components'
import { ColorOptions } from '../../ThemeProvider/types'
import { TypographyProps } from '../types'
import { StyledSpan } from './styles'

interface ISpanProps extends ComponentPropsWithoutRef<'span'>, TypographyProps {
  /** Any renderable React child, such as an element, string, or fragment */
  children?: ReactNode
  /** The color of the font we want to display  */
  color?: Extract<ColorOptions, 'darkGrey'| 'white'>
}

const Span = ({
  align = 'left',
  children,
  color = 'darkGrey',
  noWrap = false,
}: ISpanProps) => {
  const themeContext = useContext(ThemeContext)

  return (
    <StyledSpan
      align={align}
      color={color}
      noWrap={noWrap}
      theme={themeContext}
    >
      {children}
    </StyledSpan>
  )
}

export { Span }
export type { ISpanProps as SpanProps }
