import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { ChangeEvent } from 'react';
import { render } from 'utils/testing';

import { Input } from '../Input';

describe('Input.test.tsx', () => {
  it('should render input correctly', () => {
    render(<Input name="name" label="Name" />);

    expect(screen.getByTestId('input_name')).toBeInTheDocument();
    expect(screen.getByTestId('label_Name')).toHaveTextContent('Name');
  });

  it('should render input without label', () => {
    render(<Input name="name" />);

    expect(screen.getByTestId('input_name')).toBeInTheDocument();
    expect(screen.queryByTestId('label_Name')).not.toBeInTheDocument();
  });

  it('should show input error', () => {
    render(<Input name="name" label="Name" error="name is required" />);

    expect(screen.queryByTestId('error_text_name')).not.toBeInTheDocument();

    userEvent.click(screen.getByTestId('input_name'));

    fireEvent.blur(screen.getByTestId('input_name'));

    expect(screen.getByTestId('error_text_name')).toBeInTheDocument();
    expect(screen.getByTestId('error_text_name')).toHaveTextContent(
      'name is required'
    );
  });

  it('should show input error without handle input controls', () => {
    render(
      <Input
        name="name"
        label="Name"
        error="name is required"
        enableUpdateControls={false}
      />
    );

    userEvent.click(screen.getByTestId('input_name'));

    expect(screen.getByTestId('error_text_name')).toBeInTheDocument();
    expect(screen.getByTestId('error_text_name')).toHaveTextContent(
      'name is required'
    );
  });

  it('should handle blur', () => {
    const onBlur = jest.fn();

    render(<Input name="name" label="Name" onBlur={onBlur} />);

    userEvent.click(screen.getByTestId('input_name'));
    fireEvent.blur(screen.getByTestId('input_name'));

    expect(onBlur).toHaveBeenCalled();
  });

  it('should handle change', () => {
    let value = '';
    const onChange = jest
      .fn()
      .mockImplementation((event: ChangeEvent<HTMLInputElement>) => {
        value += event.target.value;
      });

    render(
      <Input name="name" label="Name" value={value} onChange={onChange} />
    );

    userEvent.type(screen.getByTestId('input_name'), 'gabriel');

    expect(value).toEqual('gabriel');
    expect(onChange).toHaveBeenCalled();
  });

  it('should handle click', () => {
    const onClick = jest.fn();

    render(<Input name="name" label="Name" onClick={onClick} />);

    userEvent.click(screen.getByTestId('input_name'));

    expect(onClick).toHaveBeenCalled();
  });

  it('should render disabled input', () => {
    render(<Input name="name" label="Name" disabled />);

    expect(screen.getByTestId('input_name')).toBeDisabled();
  });
});
