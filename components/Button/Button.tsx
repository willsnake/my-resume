import React, { ComponentPropsWithRef, ReactNode, MouseEvent } from "react";
import { Button as RKButton } from "reakit/Button";
import { Variant } from '../types'

interface IButtonProps extends ComponentPropsWithRef<'button'>  {
    /** Any renderable React child, such as an element, string, or fragment */
    children?: ReactNode
    /** Is the button currently disabled. */
    disabled?: boolean
    /** Click handler for the button. */
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
    /** Visual variant of button. */
    variant?: Variant
    /** Manually defined width. */
    width?: number | string
  }

  const Button = ({
      disabled = false,
      onClick = (_event: MouseEvent<HTMLButtonElement>) => {},
      variant = "primary",
      children,
      width,
    }: IButtonProps) => {
      return <RKButton
        as="button"
        disabled={disabled}
        onClick={onClick}
        variant={variant}
        width={width}
        >{children}</RKButton>
  }

  export { Button, IButtonProps as ButtonProps }