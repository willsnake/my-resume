import React, { ComponentPropsWithRef, ReactNode, MouseEvent } from 'react'
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
  disabled = false,
  onClick = (_event: MouseEvent<HTMLButtonElement>) => {},
  variant = 'primary',
  children,
}: IButtonProps) => {
  return (
    <StyledButton
      data-variant={variant}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  )
}

export { Button, IButtonProps as ButtonProps }
