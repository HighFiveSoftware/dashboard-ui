import {
  createHistory,
  createMemorySource,
  LocationProvider,
  Router
} from '@reach/router';
import { render } from '@testing-library/react';

// render function with Router wrapper from @reach/router
export function renderWithRouterWrapper(
  ui: any,
  { route = '/', history = createHistory(createMemorySource(route)) } = {}
) {
  return {
    ...render(
      <LocationProvider history={history}>
        <Router>{ui}</Router>
      </LocationProvider>
    ),
    history
  };
}
