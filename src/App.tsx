import { Router, LocationProvider, Redirect } from '@reach/router';
import { Container } from 'semantic-ui-react';
import React, { useState } from 'react';
import { LoginForm } from './pages/LoginForm';
import { WorldwideCases } from './pages/WorldwideCases';
import { RegionalCases } from './pages/RegionalCases';
import { Topbar } from './components/Topbar';
import styles from './App.module.css';
import { TopCountries } from './pages/TopCountries';
import { IngestorReport } from './pages/IngestorReport';
import LoginContext from './context/LoginContext';

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <LoginContext.Provider
        value={{
          loggedIn,
          setLoggedIn
        }}
      >
        <Container className={styles.main_container}>
          <LocationProvider>
            <Topbar />
          </LocationProvider>
          <Router>
            {loggedIn && <Redirect from="/login" to="/" />}
            <WorldwideCases path="/" />
            {!loggedIn && <LoginForm path="/login" />}

            <TopCountries path="/topCountries" />
            <RegionalCases path="/region/:region" />

            {loggedIn && <IngestorReport path="/admin/ingestor/" />}
          </Router>
        </Container>
      </LoginContext.Provider>
    </div>
  );
};

export default App;
