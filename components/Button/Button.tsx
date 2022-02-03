import React, {
  ComponentPropsWithRef,
  MouseEvent,
  ReactNode,
  useContext
} from 'react'
import { ThemeContext } from 'styled-components'
import { StyledButton } from './styles'
import { Variant } from './types'

interface IButtonProps extends ComponentPropsWithRef<'button'> {
  /** Any renderable React child, such as an element, string, or fragment */
  children?: ReactNode
  /** Is the button currently disabled. */
  disabled?: boolean
  /** Click handler for the button. */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  /** Visual variant of button. */
  variant?: Variant
}

const Button = ({
  children,
  disabled = false,
  onClick = (_event: MouseEvent<HTMLButtonElement>) => {},
  variant = 'primary',
}: IButtonProps) => {
  const themeContext = useContext(ThemeContext)

  return (
    <StyledButton
      data-variant={variant}
      disabled={disabled}
      onClick={onClick}
      theme={themeContext}
    >
      {children}
    </StyledButton>
  )
}

export { Button }
export type { IButtonProps as ButtonProps }
