import { render, screen } from '@testing-library/react';

import Main from './main.component';

describe('<Main />', () => {
  it('should render the main component', () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole('heading', { name: /Next Boilerplate/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render colors correctly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
  });
});
