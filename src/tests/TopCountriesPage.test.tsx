/* eslint-env jest */
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import topCountryData from './data/topCountryData.json';
import { TopCountries } from '../pages/TopCountries';
import { renderWithRouterWrapper } from './utils';
import { API_URL } from '../constants';

const server = setupServer(
  rest.get(`${API_URL}/cases/topCountries`, (req, res, ctx) => {
    return res(ctx.json(topCountryData));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('<TopCountries />', () => {
  test('top countries page renders as expected', async () => {
    const component = renderWithRouterWrapper(
      <TopCountries path="/topCountries" />,
      {
        route: '/topCountries'
      }
    );

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));

    expect(component.asFragment()).toMatchSnapshot();
  });
});
