import styled from 'styled-components'
import { TypographyProps } from '../types'
import { noWrapStyles } from '../styles'

const StyledSpan = styled.span<TypographyProps>`
    color: ${ ({ color, theme }) => theme.colors[color] ?? theme.colors.darkGrey };
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    text-align: ${({ align }) => align};
    ${({ noWrap }) => noWrap && noWrapStyles}
`

export {
    StyledSpan
}