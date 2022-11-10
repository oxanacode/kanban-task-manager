import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../Header';
import { AppLogo } from '../Header/AppLogo';
import { Customization } from '../Header/Customization';
import { MenuButton } from '../Header/MenuButton';
import { SignInButton } from '../Header/SignInButton';
import { SignUpButton } from '../Header/SignUpButton';
import { SideDrawer } from '../SideDrawer';

export const Layout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  return (
    <>
      {drawerOpen && (
        <SideDrawer onClose={() => setDrawerOpen(false)}>
          <SignUpButton isHeader={false} />
          <SignInButton isHeader={false} />
        </SideDrawer>
      )}
      <Header>
        <AppLogo />
        <Customization />
        <MenuButton openDrawer={openDrawer} />
        <SignInButton isHeader={true} />
        <SignUpButton isHeader={true} />
      </Header>
      <Outlet />
    </>
  );
};
