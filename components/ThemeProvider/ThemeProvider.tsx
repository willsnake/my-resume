import React, { Component, ReactNode } from 'react'
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { GlobalStyle } from './styles'
import { baseTheme  } from './themes'
import { Theme } from './types'

interface IThemeProviderProps extends Component {
  /** Any renderable React child, such as an element, string, or fragment */
  children?: ReactNode
  /** An object containing all of the base params for the theme */
  theme?: Theme
}

const ThemeProvider = ({
  children,
  theme = baseTheme,
}: IThemeProviderProps) => {
  return (
    <StyledThemeProvider
      theme={theme}
    >
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  )
}

export { ThemeProvider, IThemeProviderProps as ThemeProviderProps }
