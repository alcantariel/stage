import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ActionButton } from '../ActionButton';

describe('ActionButton.test.tsx', () => {
  it('should render correctly', () => {
    render(<ActionButton icon="check">Click Me!</ActionButton>);

    expect(screen.getByText('Click Me!')).toBeInTheDocument();
    expect(screen.getByTestId('action_button_icon_check')).toBeInTheDocument();
  });

  it('should call action button click', () => {
    const onClickFn = jest.fn();

    render(
      <ActionButton icon="check" onClick={onClickFn}>
        Click Me!
      </ActionButton>
    );

    userEvent.click(screen.getByText('Click Me!').parentElement!);

    expect(onClickFn).toHaveBeenCalled();
  });
});
