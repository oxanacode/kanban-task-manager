import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { Link as RouterLink } from 'react-router-dom';

import { ROUTES } from '../../../constants/routes';

type SigUpButtonProps = {
  isHeader: boolean;
};

export const SignUpButton = ({ isHeader }: SigUpButtonProps) => {
  const handleVisibility = (header: boolean) => {
    if (header) {
      return { xs: 'none', sm: 'inline-flex' };
    }

    return 'inline-flex';
  };

  return (
    <Link
      component={RouterLink}
      to={ROUTES.SIGN_UP.path}
      underline={'none'}
      sx={{ display: handleVisibility(isHeader) }}
    >
      <Button sx={{ width: '100%' }}>Sign Up</Button>
    </Link>
  );
};
