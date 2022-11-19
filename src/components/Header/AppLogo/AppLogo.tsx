import Box from '@mui/joy/Box';
import Link from '@mui/joy/Link';
import { Link as RouterLink } from 'react-router-dom';

import logo from '../../../assets/images/app_logo.svg';
import { ROUTES } from '../../../constants/routes';

export const AppLogo = () => {
  return (
    <Link component={RouterLink} to={ROUTES.WELCOME.path}>
      <Box
        component="img"
        sx={{
          height: 40,
          width: 40,
        }}
        alt="App Logo"
        src={logo}
      />
    </Link>
  );
};
