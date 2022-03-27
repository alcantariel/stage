import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  ReactNode
} from 'react';
import styled from 'styled-components';

import { ButtonProps } from '../Button';

export interface ActionButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  icon: IconProp;
}

const StyledActionButton = styled.button<ButtonProps>`
  border: none;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 8px;
  padding: 5px;

  svg {
    color: ${props => props.theme.textColor};
  }

  :hover,
  :focus {
    background-color: ${props => props.theme.backgroundColor};
    box-shadow: 0 0 0 1px ${props => props.theme.boxShadowColor};
    outline: none;
  }

  :last-child {
    margin-right: 0;
  }

  p {
    background-color: ${props => props.theme.primary};
    border-radius: 4px;
    color: #fff;
    margin-left: -30px;
    margin-top: -30px;
    opacity: 0;
    padding: 4px;
    pointer-events: none;
    position: absolute;
    transition: opacity 0.1s linear;
    visibility: hidden;
    z-index: 1;
  }

  :hover {
    p {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const ActionButton = forwardRef(
  (props: ActionButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const { children, icon, onClick, ...rest } = props;

    return (
      <StyledActionButton {...rest} ref={ref} onClick={onClick} tabIndex={-1}>
        <p>{children}</p>
        <FontAwesomeIcon
          icon={icon}
          data-testid={`action_button_icon_${icon}`}
        />
      </StyledActionButton>
    );
  }
);

ActionButton.displayName = 'ActionButton';
