// src/components/NavBar.js
import React from 'react';
import { Menu } from 'semantic-ui-react';

const NavBar = () => (
  <Menu stackable>
    <Menu.Item name="home" content="Home" />
    <Menu.Item name="questions" content="Questions" />
    <Menu.Item name="articles" content="Articles" />
    <Menu.Item name="tutorials" content="Tutorials" />
  </Menu>
);

export default NavBar;
