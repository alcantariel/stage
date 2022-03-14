import { ErrorText, Label } from 'components';
import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useState
} from 'react';
import styled from 'styled-components';

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

interface SelectControls {
  blurred: boolean;
  dirty: boolean;
  pristine: boolean;
}

type Props<T> = SelectWithObjects<T> | SelectWithStrings;

export const StyledSelect = styled.select<SelectProps>`
  background-color: ${props => props.theme.backgroundColor};
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
    color: ${props => props.theme.disabledTextColor};
    cursor: not-allowed;
  }
`;

const areOptionsWithObjects = <T extends any>(
  props: Props<T>
): props is SelectWithObjects<T> => {
  return props.options.length > 0 && typeof props.options[0] === 'object';
};

export const initialControls: SelectControls = {
  blurred: false,
  dirty: false,
  pristine: true
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

  const handleChangeControls = (
    prevControls: SelectControls
  ): SelectControls => {
    return {
      ...prevControls,
      dirty: true,
      pristine: false
    };
  };

  const handleFocusControls = (
    prevControls: SelectControls
  ): SelectControls => {
    return {
      ...prevControls,
      blurred: true
    };
  };

  const handleControls = (
    event: ChangeEvent<HTMLSelectElement> | React.FocusEvent<HTMLSelectElement>
  ): void => {
    const isBlurEvent = event.type === 'blur';
    const isChangeEvent = event.type === 'change';

    if (!controls.blurred && isBlurEvent) {
      setControls(handleFocusControls);
    }

    if (controls.pristine && isChangeEvent) {
      setControls(handleChangeControls);
    }
  };

  const renderObjectOptions = () => {
    const { options, getOptionLabel, getOptionValue } =
      props as SelectWithObjects<T>;

    return options.map((option: T, index: number) => (
      <option
        key={index}
        value={getOptionValue(option, index)}
        data-testid={`option_${index}_${option}`}
      >
        {getOptionLabel(option, index)}
      </option>
    ));
  };

  const renderStringOptions = () => {
    const { options } = props as SelectWithStrings;

    return options.map((option: string, index: number) => (
      <option
        key={index}
        value={option}
        data-testid={`option_${index}_${option}`}
      >
        {option}
      </option>
    ));
  };

  const hasError = !!error && controls.blurred;

  return (
    <>
      {label && (
        <Label htmlFor={name} data-testid={`label_select_${name}`}>
          {label}
        </Label>
      )}
      <StyledSelect
        {...rest}
        id={name}
        name={name}
        hasError={hasError}
        defaultValue={value}
        onBlur={handleBlur}
        onChange={handleChange}
        data-testid={`select_${name}`}
      >
        <option value="" data-testid="option_default">
          Selecione
        </option>
        {areOptionsWithObjects(props)
          ? renderObjectOptions()
          : renderStringOptions()}
      </StyledSelect>
      {hasError && <ErrorText>{error}</ErrorText>}
    </>
  );
};
