import { act, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { ChangeEvent } from 'react';
import { render } from 'utils/testing';

import { Input } from './Input';

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

    expect(screen.queryByText('name is required')).not.toBeInTheDocument();

    act(() => {
      fireEvent.blur(screen.getByTestId('input_name'));
    });

    expect(screen.getByText('name is required')).toBeInTheDocument();
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
