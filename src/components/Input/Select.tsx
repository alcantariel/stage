import { Label } from 'components';
import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useState
} from 'react';
import styled from 'styled-components';

import { ErrorText } from './ErrorText';
import { FormControls, initialControls } from './Input';

interface SelectProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  error?: string;
  hasError?: boolean;
  label?: string;
  name: string;
  ref?: any;
}

interface SelectWithObjects<T> extends SelectProps {
  options: T[];
  getOptionLabel: (option: T, index: number) => string;
  getOptionValue: (option: T, index: number) => string;
}

interface SelectWithStrings extends SelectProps {
  options: string[];
}

type Props<T> = SelectWithObjects<T> | SelectWithStrings;

export const StyledSelect = styled.select<SelectProps>`
  border: 1px solid
    ${props =>
      props.hasError ? props.theme.errorColor : props.theme.defaultBorderColor};
  border-radius: 4px;
  height: 30px;
  padding: 4px;
  width: 100%;

  :focus {
    border: 1px solid ${props => props.theme.primary};
    outline: none;
  }

  :disabled {
    background-color: ${props => props.theme.disabledColor};
  }
`;

const areOptionsWithObjects = <T extends any>(
  props: Props<T>
): props is SelectWithObjects<T> => {
  return props.options.length > 0 && typeof props.options[0] === 'object';
};

export const Select = <T extends any>(props: Props<T>) => {
  const { label, name, value, error, onBlur, onChange, ...rest } = props;

  const [controls, setControls] = useState(initialControls);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    onChange?.(event);
    handleControls(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLSelectElement>): void => {
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
    event: ChangeEvent<HTMLSelectElement> | React.FocusEvent<HTMLSelectElement>
  ): void => {
    const isBlurEvent = event.type === 'blur';
    const isChangeEvent = event.type === 'change';

    if (!controls.blurred && isBlurEvent) {
      setControls(handleFocusControls('blur'));
    }

    if (controls.pristine && isChangeEvent) {
      setControls(handleChangeControls);
    }
  };

  const renderObjectOptions = () => {
    const { options, getOptionLabel, getOptionValue } =
      props as SelectWithObjects<T>;

    return options.map((option: T, index: number) => (
      <option key={index} value={getOptionValue(option, index)}>
        {getOptionLabel(option, index)}
      </option>
    ));
  };

  const renderStringOptions = () => {
    const { options } = props as SelectWithStrings;

    return options.map((option: string, index: number) => (
      <option key={index} value={option}>
        {option}
      </option>
    ));
  };

  const hasError = !!error && controls.blurred;

  return (
    <>
      <Label htmlFor={name} data-testid={`label_select_${name}`}>
        {label}
      </Label>
      <StyledSelect
        {...rest}
        id={name}
        name={name}
        hasError={hasError}
        defaultValue={value}
        onBlur={handleBlur}
        onChange={handleChange}
      >
        <option value="">Selecione</option>
        {areOptionsWithObjects(props)
          ? renderObjectOptions()
          : renderStringOptions()}
      </StyledSelect>
      {hasError && <ErrorText>{error}</ErrorText>}
    </>
  );
};
