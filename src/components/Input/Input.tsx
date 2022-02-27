import { Label } from 'components';
import {
  ChangeEvent,
  DetailedHTMLProps,
  // FocusEvent, focus event is not exported from react
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  MouseEvent,
  useState
} from 'react';
import styled from 'styled-components';

import { ErrorText } from './ErrorText';

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: string;
  hasError?: boolean;
  label?: string;
  name: string;
}

export interface FormControls {
  blurred: boolean;
  dirty: boolean;
  pristine: boolean;
  touched: boolean;
}

export const StyledInput = styled.input<InputProps>`
  border: 1px solid
    ${props =>
      props.hasError ? props.theme.errorColor : props.theme.defaultBorderColor};
  border-radius: 4px;
  padding: 8px;
  width: 100%;

  :focus {
    border: 1px solid ${props => props.theme.primary};
    outline: none;
  }

  :disabled {
    background-color: ${props => props.theme.disabledColor};
  }
`;

export const initialControls: FormControls = {
  blurred: false,
  dirty: false,
  pristine: true,
  touched: false
};

export const Input = forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { id, name, label, error, onBlur, onClick, onChange, ...rest } =
      props;

    const [controls, setControls] = useState(initialControls);

    const handleClick = (
      event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>
    ): void => {
      onClick?.(event);
      handleControls(event);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      onChange?.(event);
      handleControls(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
      onBlur?.(event);
      handleControls(event);
    };

    const handleChangeControls = (prevControls: FormControls): FormControls => {
      return {
        ...prevControls,
        dirty: true,
        pristine: false
      };
    };

    const handleFocusControls =
      (type: 'blur' | 'click') =>
      (prevControls: FormControls): FormControls => {
        return {
          ...prevControls,
          [type === 'blur' ? 'blurred' : 'touched']: true
        };
      };

    const handleControls = (
      event:
        | ChangeEvent<HTMLInputElement>
        | React.FocusEvent<HTMLInputElement>
        | MouseEvent<HTMLInputElement, globalThis.MouseEvent>
    ): void => {
      const isBlurEvent = event.type === 'blur';
      const isChangeEvent = event.type === 'change';
      const isClickEvent = event.type === 'click';

      if (!controls.blurred && isBlurEvent) {
        setControls(handleFocusControls('blur'));
      }

      if (controls.pristine && isChangeEvent) {
        setControls(handleChangeControls);
      }

      if (!controls.touched && isClickEvent) {
        setControls(handleFocusControls('click'));
      }
    };

    const hasError = !!error && controls.blurred;

    return (
      <>
        {label && (
          <Label htmlFor={id} data-testid={`label_${label}`}>
            {label}
          </Label>
        )}
        <StyledInput
          {...rest}
          id={id}
          ref={ref}
          name={name}
          hasError={hasError}
          onBlur={handleBlur}
          onClick={handleClick}
          onChange={handleChange}
          data-testid={`input_${name}`}
        />
        {hasError && <ErrorText>{error}</ErrorText>}
      </>
    );
  }
);

Input.displayName = 'Input';
