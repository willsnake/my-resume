import React, {
  ComponentPropsWithoutRef,
  ReactNode,
  useContext
} from 'react'
import { ThemeContext } from 'styled-components'
import { ColorOptions } from '../../ThemeProvider/types'
import { TypographyProps } from '../types'
import { StyledH1 } from './styles'

interface IH1Props extends ComponentPropsWithoutRef<'h1'>, TypographyProps {
  /** Any renderable React child, such as an element, string, or fragment */
  children?: ReactNode
  /** The color of the font we want to display  */
  color?: Extract<ColorOptions, 'primary' | 'white'>
}

const H1 = ({
  align = 'left',
  children,
  color = 'white',
  noWrap = false,
}: IH1Props) => {
  const themeContext = useContext(ThemeContext)

  return (
    <StyledH1
      align={align}
      color={color}
      noWrap={noWrap}
      theme={themeContext}
    >
      {children}
    </StyledH1>
  )
}

export { H1 }
export type { IH1Props as H1Props }
