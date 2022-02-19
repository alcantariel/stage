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
  enableUpdateControls?: boolean;
  error?: string;
  label?: string;
  name: string;
}

export interface InputControls {
  blurred: boolean;
  dirty: boolean;
  pristine: boolean;
  touched: boolean;
}

const StyledLabel = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 6px;
`;

const StyledInput = styled.input<InputProps>`
  border: 1px solid
    ${props =>
      !!props.error ? props.theme.errorColor : props.theme.defaultBorderColor};
  border-radius: 4px;
  box-sizing: border-box;
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

const initialControls: InputControls = {
  blurred: false,
  dirty: false,
  pristine: true,
  touched: false
};

const handleChangeControls = (prevControls: InputControls): InputControls => {
  return {
    ...prevControls,
    dirty: true,
    pristine: false
  };
};

const handleFocusControls =
  (type: 'blur' | 'click') =>
  (prevControls: InputControls): InputControls => {
    return {
      ...prevControls,
      [type === 'blur' ? 'blurred' : 'touched']: true
    };
  };

export const Input = forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      id,
      name,
      label,
      error,
      onBlur,
      onClick,
      onChange,
      enableUpdateControls = true,
      ...rest
    } = props;

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

    const handleControls = (
      event:
        | ChangeEvent<HTMLInputElement>
        | React.FocusEvent<HTMLInputElement>
        | MouseEvent<HTMLInputElement, globalThis.MouseEvent>
    ): void => {
      if (enableUpdateControls) {
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
      }
    };

    return (
      <>
        {label && (
          <StyledLabel htmlFor={id} data-testid={`label_${label}`}>
            {label}
          </StyledLabel>
        )}
        <StyledInput
          {...rest}
          id={id}
          ref={ref}
          name={name}
          error={error}
          onBlur={handleBlur}
          onClick={handleClick}
          onChange={handleChange}
          data-testid={`input_${name}`}
        />
        {error && (!enableUpdateControls || controls.blurred) && (
          <ErrorText id={name}>{error}</ErrorText>
        )}
      </>
    );
  }
);

Input.displayName = 'Input';
