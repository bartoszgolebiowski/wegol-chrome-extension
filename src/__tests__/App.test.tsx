import { render, screen } from '@testing-library/react';

describe('Test', () => {
  it('test', () => {
    expect(true).toBe(true);
  });

  it('render', () => {
    render(<div>test</div>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
