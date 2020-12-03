import React from 'react';
import { Router } from '@reach/router';
import { Cases } from './pages/Cases';

const App: React.FC = () => {
  return (
    <Router>
      <Cases path="/" />
    </Router>
  );
};

export default App;
