import styled from 'styled-components'
import { TypographyProps } from '../types'
import { noWrapStyles } from '../styles'

const StyledP = styled.p<TypographyProps>`
    color: ${ ({ color, theme }) => theme.colors[color] ?? theme.colors.darkGrey };
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    text-align: ${({ align }) => align};
    ${({ noWrap }) => noWrap && noWrapStyles}
`

export {
    StyledP
}