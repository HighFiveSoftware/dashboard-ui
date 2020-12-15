/* eslint-env jest */
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import worldWideData from './data/worldwideData.json';
import countryData from './data/countryData.json';
import { Cases } from '../pages/Cases';
import { renderWithRouterMatch } from './utils';
import { API_URL } from '../constants';

const server = setupServer(
  rest.get(`${API_URL}/cases/`, (req, res, ctx) => {
    const country = req.url.searchParams.get('country');
    if (country) {
      return res(ctx.json(countryData));
    }
    return res(ctx.json(worldWideData));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('<Cases />', () => {
  test('correctly renders with default route', async () => {
    renderWithRouterMatch(Cases, { path: '/:country?', route: '/' });

    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));

    expect(screen.queryByText(/total cases/i)).not.toBeEmptyDOMElement();
    expect(screen.queryByText(/new cases/i)).not.toBeEmptyDOMElement();
  });

  test('correctly renders with a country route', async () => {
    renderWithRouterMatch(Cases, { path: '/:country?', route: '/turkey' });

    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));

    expect(screen.queryByText(/total cases/i)).not.toBeEmptyDOMElement();
    expect(screen.queryByText(/new cases/i)).not.toBeEmptyDOMElement();
  });

  test('worldwide cases page renders as expected', async () => {
    const component = renderWithRouterMatch(Cases, {
      path: '/:country?',
      route: '/'
    });

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));

    expect(component.asFragment()).toMatchSnapshot();
  });

  test('country cases page renders as expected', async () => {
    const component = renderWithRouterMatch(Cases, {
      path: '/:country?',
      route: '/'
    });

    await waitForElementToBeRemoved(() => screen.queryAllByText(/loading/i));

    expect(component.asFragment()).toMatchSnapshot();
  });
});
