import styled from 'styled-components'
import { TypographyProps } from '../types'
import { noWrapStyles } from '../styles'

const StyledH1 = styled.h1<TypographyProps>`
    color: ${ ({ color, theme }) => theme.colors[color] ?? theme.colors.white };
    font-family: 'IBM Plex Mono';
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 52px;
    text-align: ${({ align }) => align};
    ${({ noWrap }) => noWrap && noWrapStyles}
`

export {
    StyledH1
}



    