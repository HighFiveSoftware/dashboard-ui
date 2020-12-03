import React from 'react';
import { Router } from '@reach/router';
import { Cases } from './pages/Cases';
import { LoginForm } from './pages/LoginForm';

const App: React.FC = () => {
  return (
    <Router>
      <Cases path="/" />
      <LoginForm path="/login" />
    </Router>
  );
};

export default App;
