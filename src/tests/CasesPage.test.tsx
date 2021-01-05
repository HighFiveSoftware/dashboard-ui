/* eslint-env jest */
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import worldWideData from './data/worldwideData.json';
import regionalData from './data/regionalData.json';
import { WorldwideCases } from '../pages/WorldwideCases';
import { renderWithRouterWrapper } from './utils';
import { API_URL } from '../constants';
import { RegionalCases } from '../pages/RegionalCases';

const server = setupServer(
  rest.get(`${API_URL}/cases/`, (req, res, ctx) => {
    const country = req.url.searchParams.get('country');
    if (country) {
      return res(ctx.json(regionalData));
    }
    return res(ctx.json(worldWideData));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('<Cases />', () => {
  test('correctly renders with default route', async () => {
    renderWithRouterWrapper(<WorldwideCases path="/" />, { route: '/' });

    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));

    expect(screen.queryByText(/total cases/i)).not.toBeEmptyDOMElement();
    expect(screen.queryByText(/new cases/i)).not.toBeEmptyDOMElement();
  });

  test('correctly renders with a country route', async () => {
    renderWithRouterWrapper(<RegionalCases path="region/:region" />, {
      route: '/region/turkey'
    });

    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));

    expect(screen.queryByText(/total cases/i)).not.toBeEmptyDOMElement();
    expect(screen.queryByText(/new cases/i)).not.toBeEmptyDOMElement();
  });

  test('worldwide cases page renders as expected', async () => {
    const component = renderWithRouterWrapper(<WorldwideCases path="/" />, {
      route: '/'
    });

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));

    expect(component.asFragment()).toMatchSnapshot();
  });

  test('country cases page renders as expected', async () => {
    const component = renderWithRouterWrapper(
      <RegionalCases path="region/:region" />,
      {
        route: 'region/turkey'
      }
    );

    await waitForElementToBeRemoved(() => screen.queryAllByText(/loading/i));

    expect(component.asFragment()).toMatchSnapshot();
  });
});
