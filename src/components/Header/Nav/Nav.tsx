import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import Box from '@mui/joy/Box';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { ROUTES } from '../../../constants/routes';
import { useAppSelector } from '../../../store/hooks';
import { HeaderState } from '../../../types/HeaderState';
import { NavButton } from '../NavButton';
import { SignOutButton } from '../SignOutButton';

export const Nav = ({ placedInHeader }: { placedInHeader: boolean }) => {
  const { t } = useTranslation();
  const { isUserLogIn } = useAppSelector((state) => state.user);
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState(HeaderState.notLogged);
  let nav;

  useEffect(() => {
    if (!isUserLogIn) {
      setCurrentLocation(HeaderState.notLogged);
    } else {
      setCurrentLocation(HeaderState.logged);
    }
  }, [isUserLogIn, location.pathname]);

  const handleDisplay = () => {
    return placedInHeader ? { xs: 'none', sm: 'flex' } : 'flex';
  };

  if (currentLocation === HeaderState.logged) {
    nav = (
      <>
        <NavButton
          route={ROUTES.MAIN.path}
          variant={'outlined'}
          color={'neutral'}
          text={t('toMainPage')}
          isHeader={placedInHeader}
        >
          <HomeOutlinedIcon color="primary" />
        </NavButton>
        <NavButton
          route={ROUTES.PROFILE.path}
          variant={'outlined'}
          color={'neutral'}
          text={t('profile')}
          isHeader={placedInHeader}
        >
          <PersonOutlineRoundedIcon color="primary" />
        </NavButton>
        <SignOutButton isHeader={placedInHeader} />
      </>
    );
  } else {
    nav = (
      <>
        <NavButton
          route={ROUTES.SIGN_IN.path}
          variant={'outlined'}
          color={'neutral'}
          text={t('signIn')}
          isHeader={placedInHeader}
        />
        <NavButton route={ROUTES.SIGN_UP.path} variant={'solid'} text={t('signUp')} isHeader={placedInHeader} />
      </>
    );
  }

  return (
    <Box component="nav" sx={{ gap: 2, flexDirection: { xs: 'column', sm: 'row' }, display: handleDisplay() }}>
      {nav}
    </Box>
  );
};
