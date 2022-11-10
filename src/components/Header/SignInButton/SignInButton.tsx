import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { Link as RouterLink } from 'react-router-dom';

import { ROUTES } from '../../../constants/routes';

type SignInButtonProps = {
  isHeader: boolean;
};

export const SignInButton = ({ isHeader }: SignInButtonProps) => {
  const handleVisibility = (header: boolean) => {
    if (header) {
      return { xs: 'none', sm: 'inline-flex' };
    }

    return { sm: 'none' };
  };

  return (
    <Link
      component={RouterLink}
      to={ROUTES.SIGN_IN.path}
      underline={'none'}
      sx={{ display: handleVisibility(isHeader) }}
    >
      <Button variant="soft" sx={{ width: '100%' }}>
        Sign In
      </Button>
    </Link>
  );
};
