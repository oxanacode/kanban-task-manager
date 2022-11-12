import Button from '@mui/joy/Button';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '../../../store/hooks';
import { userLogOut } from '../../../store/slices/user/userSlice';

export const SignOutButton = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(userLogOut());
  };

  return (
    <Button sx={{ width: '100%' }} onClick={handleClick}>
      {t('signOut')}
    </Button>
  );
};
