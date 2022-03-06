import { render, screen } from '@testing-library/react';

import { PageTitle } from './PageTitle';

describe('PageTitle.test.tsx', () => {
  it('should render correctly', () => {
    render(<PageTitle>Title</PageTitle>);
    expect(screen.getByText('Title')).toBeInTheDocument();
  });
});
