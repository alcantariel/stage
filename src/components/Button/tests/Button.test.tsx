import { fireEvent, screen } from '@testing-library/react';
import { render } from 'utils/testing';

import { Button } from '../Button';

describe('Button.test.tsx', () => {
  it('should render button', () => {
    render(<Button>Click Me</Button>);

    expect(screen.getByText('Click Me')).toBeInTheDocument();
    expect(screen.queryByTestId('btn-spinner')).not.toBeInTheDocument();
  });

  it('should render spinner', () => {
    render(<Button loading>Click Me</Button>);

    expect(screen.queryByText('Click Me')).not.toBeInTheDocument();
    expect(screen.getByTestId('btn-spinner')).toBeInTheDocument();
  });

  it('should dispatch click when isnt loading', () => {
    const onClickFn = jest.fn();

    render(<Button onClick={onClickFn}>Click Me</Button>);

    const btn = screen.getByText('Click Me');
    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);

    expect(onClickFn).toHaveBeenCalled();
  });

  it('shouldnt dispatch click when is loading', () => {
    const onClickFn = jest.fn();

    render(
      <Button loading onClick={onClickFn}>
        Click Me
      </Button>
    );

    const btn = screen.getByTestId('btn-Click Me');
    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);

    expect(onClickFn).not.toHaveBeenCalled();
  });
});
