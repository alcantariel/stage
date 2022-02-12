import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonProps } from 'components';
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEvent,
  ReactNode
} from 'react';
import styled from 'styled-components';

export interface ActionButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  icon: IconProp;
  onClick?: (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => void;
}

const StyledActionButton = styled.button<ButtonProps>`
  background-color: ${props => props.theme.backgroundColor};
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
    box-shadow: 0 0 0 1px ${props => props.theme.boxShadowHoverColor};
    outline: none;
  }

  :last-child {
    margin-right: 0;
  }

  p {
    background-color: ${props => props.theme.primary};
    border-radius: 4px;
    color: #fff;
    margin-left: -40px;
    margin-top: -20px;
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

export const ActionButton = (props: ActionButtonProps) => {
  const { children, icon, onClick, ...rest } = props;

  return (
    <StyledActionButton onClick={onClick} tabIndex={-1} {...rest}>
      <p>{children}</p>
      <FontAwesomeIcon icon={icon} />
    </StyledActionButton>
  );
};
