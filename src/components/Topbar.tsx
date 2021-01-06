import { useLocation, navigate } from '@reach/router';
import React, { useRef, useState } from 'react';
import { Button, Container, Input, Menu } from 'semantic-ui-react';

export const Topbar = () => {
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
