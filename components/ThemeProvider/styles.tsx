import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;500&family=IBM+Plex+Sans&display=swap');
  
  body {
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 500;
  }
`

export { GlobalStyle }