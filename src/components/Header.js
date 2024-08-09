// src/components/Header.js
import React from 'react';
import { Input, Menu } from 'semantic-ui-react';

const HeaderComponent = () => (
  <Menu stackable>
    <Menu.Item header>DEV@Deakin</Menu.Item>
    <Menu.Item>
      <Input icon="search" placeholder="Search..." />
    </Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item name="post" content="Post" />
      <Menu.Item name="login" content="Login" />
    </Menu.Menu>
  </Menu>
);

export default HeaderComponent;
