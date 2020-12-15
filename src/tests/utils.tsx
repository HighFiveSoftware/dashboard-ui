import { Route, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import React from 'react';

export function renderWithRouterMatch(
  component: React.FunctionComponent,
  {
    path = '/',
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  }
) {
  return {
    ...render(
      <Router history={history}>
        <Route path={path} component={component} />
      </Router>
    )
  };
}
