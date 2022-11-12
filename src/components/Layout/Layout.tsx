import { Outlet } from 'react-router-dom';

import { useAppSelector } from '../../store/hooks';

import { Header } from '../Header';
import { SideDrawer } from '../SideDrawer';

export const Layout = () => {
  const { sideDrawer } = useAppSelector((state) => state.header);

  return (
    <>
      {sideDrawer && <SideDrawer />}
      <Header />
      <Outlet />
    </>
  );
};
