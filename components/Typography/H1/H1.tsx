import React, {
  ComponentPropsWithoutRef,
  ReactNode,
  useContext
} from 'react'
import { ThemeContext } from 'styled-components'
import { TypographyProps } from '../types'
import { StyledH1 } from './styles'

interface IH1Props extends ComponentPropsWithoutRef<'h1'>, TypographyProps {
  /** Any renderable React child, such as an element, string, or fragment */
  children?: ReactNode
}

const H1 = ({
  children,
  align = 'left',
  noWrap = false,
}: IH1Props) => {
  const themeContext = useContext(ThemeContext)

  return (
    <StyledH1
      align={align}
      noWrap={noWrap}
      theme={themeContext}
    >
      {children}
    </StyledH1>
  )
}

export { H1 }
export type { IH1Props as H1Props }
