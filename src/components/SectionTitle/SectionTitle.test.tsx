import { render, screen } from '@testing-library/react';
import { SectionTitle } from './SectionTitle';

describe('SectionTitle.test.tsx', () => {
  it('should render correctly', () => {
    render(<SectionTitle>Title</SectionTitle>);
    expect(screen.getByText('Title')).toBeInTheDocument();
  });
});
