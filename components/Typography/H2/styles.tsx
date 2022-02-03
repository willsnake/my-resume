import styled from 'styled-components'
import { TypographyProps } from '../types'
import { noWrapStyles } from '../styles'

const StyledH2 = styled.h2<TypographyProps>`
    color: ${ ({ color, theme }) => theme.colors[color] ?? theme.colors.white };
    font-family: 'IBM Plex Mono';
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 42px;
    text-align: ${({ align }) => align};
    ${({ noWrap }) => noWrap && noWrapStyles}
`

export {
    StyledH2
}



    