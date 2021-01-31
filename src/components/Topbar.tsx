import { useLocation, navigate } from '@reach/router';
import React, { useContext, useRef, useState } from 'react';
import { Button, Container, Input, Menu } from 'semantic-ui-react';
import LoginContext from '../context/LoginContext';

export const Topbar = () => {
  const { loggedIn } = useContext(LoginContext);
  const location = useLocation();

  const [activeMenu, setActiveMenu] = useState(location.pathname);

  const [region, setRegion] = useState('');

  const inputRef = useRef(null);

  const handleItemClick = (name: string) => {
    setActiveMenu(name);
    navigate(name);
  };

  const handleRegionInput = (reg: string) => {
    setActiveMenu('');
    navigate(`/region/${reg}`);
  };

  return (
    <Menu size="large" fixed="top">
      <Container>
        <Menu.Item
          name="/"
          active={activeMenu === '/'}
          onClick={(_e, { name }) => handleItemClick(name!)}
        >
          Worldwide Cases
        </Menu.Item>

        <Menu.Item
          name="/topCountries"
          active={activeMenu === '/topCountries'}
          onClick={(_e, { name }) => handleItemClick(name!)}
        >
          Top Countries
        </Menu.Item>

        {loggedIn && (
          <Menu.Item
            name="/admin/ingestor"
            active={activeMenu === '/admin/ingestor'}
            onClick={(_e, { name }) => handleItemClick(name!)}
          >
            Ingestor Report
          </Menu.Item>
        )}

        <Menu.Item position="right" name={undefined}>
          <Input
            icon="flag"
            placeholder="Region..."
            ref={inputRef}
            onChange={(_, data) => setRegion(data.value)}
            action={<Button onClick={(_e, _) => handleRegionInput(region)} />}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};
