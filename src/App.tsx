import { Router } from '@reach/router';
import { Menu, Sticky } from 'semantic-ui-react';
import React, { useState, useRef } from 'react';
import { LoginForm } from './pages/LoginForm';
import { WorldwideCases } from './pages/WorldwideCases';
import { CountryCases } from './pages/CountryCases';

const App: React.FC = () => {
  const contextRef = useRef(null);
  const [activeItem, setActiveItem] = useState('gamepad');

  const handleItemClick = (name: string) => setActiveItem(name);
  return (
    <div ref={contextRef}>
      <Sticky context={contextRef}>
        <Menu size="large">
          <Menu.Item
            name="gamepad"
            active={activeItem === 'gamepad'}
            onClick={(_e, { name }) => handleItemClick(name!)}
          >
            Games
          </Menu.Item>

          <Menu.Item
            name="video camera"
            active={activeItem === 'video camera'}
            onClick={(_e, { name }) => handleItemClick(name!)}
          >
            Channels
          </Menu.Item>

          <Menu.Item
            name="video play"
            active={activeItem === 'video play'}
            onClick={(_e, { name }) => handleItemClick(name!)}
          >
            Videos
          </Menu.Item>
        </Menu>
      </Sticky>
      <Router>
        <WorldwideCases path="/" />
        <LoginForm path="login" />
        <CountryCases path=":country" />
      </Router>
    </div>
  );
};

export default App;
