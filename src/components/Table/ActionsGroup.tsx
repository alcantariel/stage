import {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  ReactNode
} from 'react';
import styled from 'styled-components';

export interface ActionsGroupProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

const StyledActionsGroup = styled.div`
  border-bottom-left-radius: 16px;
  border-top-left-radius: 16px;
  float: right;
  padding: 3px 8px 3px 8px;

  :hover {
    background-color: ${props => props.theme.backgroundColor};
    transition: 0.3s ease;
  }
`;

export const ActionsGroup = forwardRef(
  (props: ActionsGroupProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { children, ...rest } = props;
    return (
      <StyledActionsGroup {...rest} ref={ref}>
        {children}
      </StyledActionsGroup>
    );
  }
);

ActionsGroup.displayName = 'ActionsGroup';
