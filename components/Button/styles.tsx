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
    min-height: 42px;
    padding: 12px 16px;
    width: auto;

    &[data-variant="primary"] {
        background: #254F85;
        color: white;

        &:hover {
            background: #1076F9;
        }

        &:focus {
            background: #254F85;
            border: 1px solid #1076F9;
            box-shadow: 0px 0px 5px #1076F9;
        }
    }

    &[data-variant="secondary"] {
        background-color: transparent;
        border: 1px solid #999999;
        box-sizing: border-box;
        color: #999999;

        &:hover {
            color: #EAEAEA;
            border: 1px solid #EAEAEA;
        }

        &:focus {
            border: 1px solid #EAEAEA;
            filter: drop-shadow(0px 0px 5px #FFFFFF);
        }
    }
`

export {
    StyledButton
}
