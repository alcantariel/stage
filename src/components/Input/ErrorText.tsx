import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

export interface ErrorTextProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  children: ReactNode;
}

const StyledParagraph = styled.p`
  color: ${props => props.theme.errorColor};
  font-size: 12px;
  margin-top: 2px;
`;

export const ErrorText = (props: ErrorTextProps) => {
  return (
    <StyledParagraph data-testid={`error_text_${props.id || props.children}`}>
      {props.children}
    </StyledParagraph>
  );
};
