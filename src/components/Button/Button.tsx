import { Spinner } from 'components';
import { lighten } from 'polished';
import { ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent } from 'react';
import styled from 'styled-components';
import { commonTheme } from 'theme';

export type ButtonVariant = keyof typeof variants;

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  ref?: any;
  width?: number;
  loading?: boolean;
  variant?: ButtonVariant;
}

const variants = {
  primary: commonTheme.primary,
  danger: commonTheme.errorColor,
  warning: commonTheme.warningColor,
  success: commonTheme.successColor
};

const StyledButton = styled.button<ButtonProps>`
  background: ${props => variants[props.variant!]};
  border: none;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  height: 36px;
  letter-spacing: 0.5px;
  padding: 0 16px;
  text-align: center;
  width: ${props => `${props.width}px`};

  :disabled {
    background: ${props => props.theme.disabledColor};
    color: ${props => props.theme.disabledTextColor};
    cursor: not-allowed;
  }

  :focus,
  :hover {
    background: ${props =>
      !props.disabled ? lighten('.02', variants[props.variant!]) : ''};
    box-shadow: 0 2px 8px 0 ${props => props.theme.shadowColor};
    outline-color: ${props => variants[props.variant!]};
  }
`;

export const Button = (props: ButtonProps) => {
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
      type={type}
      variant={variant}
      onClick={handleClick}
      data-testid={`btn-${children}`}
    >
      {loading ? <Spinner data-testid="btn-spinner" /> : children}
    </StyledButton>
  );
};
