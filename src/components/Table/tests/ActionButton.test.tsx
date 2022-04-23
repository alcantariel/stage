import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from 'utils/testing';

import { ActionButton } from '../ActionButton';

describe('ActionButton.test.tsx', () => {
  it('should render correctly', () => {
    render(<ActionButton icon="check">Click Me!</ActionButton>);

    expect(screen.getByText('Click Me!')).toBeInTheDocument();
    expect(screen.getByTestId('action_button_icon_check')).toBeInTheDocument();
  });

  it('should call action button click', async () => {
    const onClickFn = jest.fn();

    render(
      <ActionButton icon="check" onClick={onClickFn}>
        Click Me!
      </ActionButton>
    );

    await waitFor(() =>
      userEvent.click(screen.getByText('Click Me!').parentElement!)
    );

    expect(onClickFn).toHaveBeenCalled();
  });
});
