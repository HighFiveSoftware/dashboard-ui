import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Button, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';
import { Cases } from './pages/Cases';
import { LoginForm } from './pages/LoginForm';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Sidebar.Pushable as={Segment}>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        visible={visible}
        onHide={() => setVisible(false)}
        width="thin"
      >
        <Menu.Item as="a">
          <Icon name="home" />
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="gamepad" />
          Games
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="camera" />
          Channels
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher dimmed={visible}>
        <Button onClick={() => setVisible(!visible)} icon>
          <Icon name="bars" />
        </Button>
        <Router>
          <Switch>
            <Route path="/:country?">
              <Cases />
            </Route>
            <Route path="/login">
              <LoginForm />
            </Route>
          </Switch>
        </Router>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};
export default App;
