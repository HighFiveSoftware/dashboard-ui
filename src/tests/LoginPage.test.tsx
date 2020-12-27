/* eslint-env jest */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { LoginForm } from '../pages/LoginForm';

describe('<LoginForm />', () => {
  test('correctly renders form page', async () => {
    render(<LoginForm />);

    expect(
      screen.getByRole('heading', { name: /log-in to your account/i })
    ).not.toBeEmptyDOMElement();
    expect(
      screen.getByRole('heading', { name: /log-in to your account/i })
    ).not.toBeEmptyDOMElement();
  });

  test('form page renders as expected', async () => {
    const component = render(<LoginForm />);

    expect(component.asFragment()).toMatchSnapshot();
  });
});
