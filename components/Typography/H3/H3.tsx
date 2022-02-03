import React, {
  ComponentPropsWithoutRef,
  ReactNode,
  useContext
} from 'react'
import { ThemeContext } from 'styled-components'
import { ColorOptions } from '../../ThemeProvider/types'
import { TypographyProps } from '../types'
import { StyledH3 } from './styles'

interface IH3Props extends ComponentPropsWithoutRef<'h3'>, TypographyProps {
  /** Any renderable React child, such as an element, string, or fragment */
  children?: ReactNode
  /** The color of the font we want to display  */
  color?: Extract<ColorOptions, 'primary'| 'secondary' | 'white'>
}

const H3 = ({
  align = 'left',
  children,
  color = 'primary',
  noWrap = false,
}: IH3Props) => {
  const themeContext = useContext(ThemeContext)

  return (
    <StyledH3
      align={align}
      color={color}
      noWrap={noWrap}
      theme={themeContext}
    >
      {children}
    </StyledH3>
  )
}

export { H3 }
export type { IH3Props as H3Props }
