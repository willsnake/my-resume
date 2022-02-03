import styled, { css } from 'styled-components'
import { Button } from 'reakit/Button'
import { Variant } from './types'

const getButtonCssReset = () => {
  return css`
    transition: unset;
    display: unset;
    margin: unset;
    margin-right: unset;
    padding: unset;
    background: unset;
    background-color: unset;
    border: unset;
    border-radius: unset;
    color: unset;
    cursor: unset;
    font: unset;
    font-size: unset;
    font-weight: unset;
    line-height: unset;
    outline: unset;
    text-align: unset;
    vertical-align: unset;
    white-space: unset;
    touch-action: unset;

    &:focus,
    &:disabled,
    &:hover {
      background-color: unset;
      color: unset;
      border-color: unset;
    }
  `
}

const StyledButton = styled(Button) <{ 'data-variant': Variant }>`
    ${getButtonCssReset}

    align-items: flex-start;
    border-radius: 4px;   
    cursor: pointer;
    display: flex;
    flex-direction: row;
    font-family: 'IBM Plex Mono';
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    min-height: 42px;
    padding: 12px 16px;
    width: auto;

    &[data-variant="primary"] {
        background: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};

        &:hover {
            background: ${({ theme }) => theme.colors.tertiary};
        }

        &:focus {
            background: ${({ theme }) => theme.colors.primary};
            border: 1px solid ${({ theme }) => theme.colors.tertiary};
            box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.tertiary};
        }
    }

    &[data-variant="secondary"] {
        background-color: transparent;
        border: 1px solid ${({ theme }) => theme.colors.midGrey};
        box-sizing: border-box;
        color: ${({ theme }) => theme.colors.midGrey};

        &:hover {
            color: ${({ theme }) => theme.colors.lightGrey};
            border: 1px solid ${({ theme }) => theme.colors.lightGrey};
        }

        &:focus {
            border: 1px solid ${({ theme }) => theme.colors.lightGrey};
            filter: drop-shadow(0px 0px 5px ${({ theme }) => theme.colors.white});
        }
    }
`

export {
    StyledButton
}
