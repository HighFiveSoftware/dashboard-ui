import { Router, LocationProvider } from '@reach/router';
import { Container } from 'semantic-ui-react';
import React from 'react';
import { LoginForm } from './pages/LoginForm';
import { WorldwideCases } from './pages/WorldwideCases';
import { RegionalCases } from './pages/RegionalCases';
import { Topbar } from './components/Topbar';
import styles from './App.module.css';
import { TopCountries } from './pages/TopCountries';

const App: React.FC = () => {
  // const contextRef = useRef(null);

  return (
    <div>
      <Container className={styles.main_container}>
        <LocationProvider>
          <Topbar />
        </LocationProvider>
        <Router>
          <WorldwideCases path="/" />
          <LoginForm path="/login" />
          <TopCountries path="/topCountries" />
          <RegionalCases path="/region/:region" />
        </Router>
      </Container>
    </div>
  );
};

export default App;
