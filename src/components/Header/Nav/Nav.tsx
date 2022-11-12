import Box from '@mui/joy/Box';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../../../constants/routes';
import { Profile } from '../../../pages';
import { useAppSelector } from '../../../store/hooks';
import { HeaderState } from '../../../types/HeaderState';
import { NavButton } from '../NavButton';
import { SignOutButton } from '../SignOutButton';

export const Nav = ({ placedInHeader }: { placedInHeader: boolean }) => {
  const { t } = useTranslation();
  const { header } = useAppSelector((state) => state.header);
  let nav;

  const handleDisplay = () => {
    return placedInHeader ? { xs: 'none', sm: 'flex' } : 'flex';
  };

  switch (header) {
    case HeaderState.main:
      nav = (
        <>
          <Profile />
          <SignOutButton />
        </>
      );
      break;
    case HeaderState.loggedWelcome:
      nav = <NavButton route={ROUTES.MAIN.path} variant={'plain'} text={t('goToMainPage')} />;
      break;
    default:
      nav = (
        <>
          <NavButton route={ROUTES.SIGN_IN.path} variant={'outlined'} text={t('signIn')} />
          <NavButton route={ROUTES.SIGN_UP.path} variant={'solid'} text={t('signUp')} />
        </>
      );
  }

  console.log(nav);

  return (
    <Box component="nav" sx={{ gap: 2, flexDirection: { xs: 'column', sm: 'row' }, display: handleDisplay() }}>
      {nav}
    </Box>
  );
};
