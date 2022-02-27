import {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes
} from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 6px;
`;

export interface LabelProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  htmlFor?: string;
}

export const Label = forwardRef(
  (props: LabelProps, ref: ForwardedRef<HTMLLabelElement>) => {
    const { children, htmlFor, ...rest } = props;

    return (
      <StyledLabel {...rest} ref={ref} htmlFor={htmlFor}>
        {children}
      </StyledLabel>
    );
  }
);

Label.displayName = 'Label';
