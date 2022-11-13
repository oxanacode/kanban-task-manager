import Box from '@mui/joy/Box';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { useAppSelector } from '../../store/hooks';
import { Footer } from '../Footer';

import { Header } from '../Header';
import { SideDrawer } from '../SideDrawer';

export const Layout = () => {
  return (
    <>
      <SideDrawer />
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};
