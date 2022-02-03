import React, {
  ComponentPropsWithoutRef,
  ReactNode,
  useContext
} from 'react'
import { ThemeContext } from 'styled-components'
import { ColorOptions } from '../../ThemeProvider/types'
import { TypographyProps } from '../types'
import { StyledH2 } from './styles'

interface IH2Props extends ComponentPropsWithoutRef<'h2'>, TypographyProps {
  /** Any renderable React child, such as an element, string, or fragment */
  children?: ReactNode
  /** The color of the font we want to display  */
  color?: Extract<ColorOptions, 'primary' | 'white'>
}

const H2 = ({
  align = 'left',
  children,
  color = 'white',
  noWrap = false,
}: IH2Props) => {
  const themeContext = useContext(ThemeContext)

  return (
    <StyledH2
      align={align}
      color={color}
      noWrap={noWrap}
      theme={themeContext}
    >
      {children}
    </StyledH2>
  )
}

export { H2 }
export type { IH2Props as H2Props }
