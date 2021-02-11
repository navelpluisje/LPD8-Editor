import React, { useState } from 'react';
import { Button, Menu, MenuItem, MenuItems } from '@atoms';

interface Props {
}

export const HeaderMenu: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  }

  return (
    <Menu>
      <Button onClick={toggleOpen}>Actions</Button>
      <MenuItems open={open} onClick={toggleOpen}>
        <MenuItem to="/editor">Save</MenuItem>
        <MenuItem to="/connect">Connect</MenuItem>
        <MenuItem to="/settings">Settings</MenuItem>
      </MenuItems>
    </Menu>
  );
};