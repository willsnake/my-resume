import styled from 'styled-components'
import { TypographyProps } from '../types'
import { noWrapStyles } from '../styles'

const StyledH3 = styled.h3<TypographyProps>`
    color: ${ ({ color, theme }) => theme.colors[color] ?? theme.colors.white };
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    text-align: ${({ align }) => align};
    ${({ noWrap }) => noWrap && noWrapStyles}
`

export {
    StyledH3
}