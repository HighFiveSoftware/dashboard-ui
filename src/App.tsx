import React from 'react';
import { Router } from '@reach/router';
import { WorldwideCases } from './pages/WorldwideCases';
import { LoginForm } from './pages/LoginForm';
import { CountryCases } from './pages/CountryCases';

const App: React.FC = () => {
  return (
    <Router>
      <WorldwideCases path="/" />
      <LoginForm path="login" />
      <CountryCases path=":country" />
    </Router>
  );
};

export default App;
