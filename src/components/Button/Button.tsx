import { Spinner } from 'components';
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  MouseEvent
} from 'react';
import styled from 'styled-components';
import { applyHover, theme } from 'theme';

export type ButtonVariant = keyof typeof variants;

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  loading?: boolean;
  variant?: ButtonVariant;
  width?: number;
}

const variants = {
  primary: theme.primary,
  danger: theme.errorColor,
  warning: theme.warningColor,
  success: theme.successColor
};

const StyledButton = styled.button<ButtonProps>`
  background: ${props => variants[props.variant!]};
  border: none;
  border-radius: 4px;
  color: ${props => props.theme.textColor};
  cursor: pointer;
  height: 30px;
  letter-spacing: 0.5px;
  outline: none;
  padding: 0 16px;
  text-align: center;
  transition: 0.3s ease;
  width: ${props => `${props.width}px`};

  :disabled {
    background: ${props => props.theme.disabledColor};
    color: ${props => props.theme.disabledTextColor};
    cursor: not-allowed;
  }

  :focus,
  :hover {
    background: ${props =>
      !props.disabled ? applyHover(variants[props.variant!]) : ''};
    box-shadow: 0 2px 8px 0 ${props => props.theme.shadowColor};
  }
`;

export const Button = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      onClick,
      children,
      type = 'button',
      loading = false,
      variant = 'primary',
      ...rest
    } = props;

    const handleClick = (
      event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
    ): void => {
      if (!loading) {
        return onClick?.(event);
      }
    };

    return (
      <StyledButton
        {...rest}
        ref={ref}
        type={type}
        variant={variant}
        onClick={handleClick}
        data-testid={`btn-${rest.id || children}`}
      >
        {loading ? <Spinner data-testid="btn-spinner" /> : children}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';
