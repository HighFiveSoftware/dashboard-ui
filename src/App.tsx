import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Cases } from './pages/Cases';
import { LoginForm } from './pages/LoginForm';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/:country?">
          <Cases />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
