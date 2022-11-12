import Box from '@mui/joy/Box';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '../../../constants/routes';
import { AuthButton } from '../AuthButton';

export const Nav = ({ placedInHeader }: { placedInHeader: boolean }) => {
  const { t } = useTranslation();

  const handleDisplay = () => {
    return placedInHeader ? { xs: 'none', sm: 'flex' } : 'flex';
  };

  return (
    <Box component="nav" sx={{ gap: 2, flexDirection: { xs: 'column', sm: 'row' }, display: handleDisplay() }}>
      <AuthButton route={ROUTES.SIGN_IN.path} variant={'outlined'} text={t('signIn')} />
      <AuthButton route={ROUTES.SIGN_UP.path} variant={'solid'} text={t('signUp')} />
    </Box>
  );
};
