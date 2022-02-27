import {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  ReactNode
} from 'react';
import styled from 'styled-components';

export interface ErrorTextProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
}

const StyledError = styled.p`
  color: ${props => props.theme.errorColor};
  font-size: 12px;
  margin-top: 2px;
`;

export const ErrorText = forwardRef(
  (props: ErrorTextProps, ref: ForwardedRef<HTMLParagraphElement>) => {
    const { id, children, ...rest } = props;
    return (
      <StyledError
        {...rest}
        ref={ref}
        data-testid={`error_text_${id || children}`}
      >
        {children}
      </StyledError>
    );
  }
);

ErrorText.displayName = 'ErrorText';
