import { Button } from '@mui/joy';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../../store/hooks';

import { setIsOpenedDialogAddBoard } from '../../../store/slices/boards/boardsSlice';
import { closeSideDrawer } from '../../../store/slices/header/headerSlice';

export const CreateNewBoard = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { sideDrawer } = useAppSelector((state) => state.header);

  const onClick = () => {
    dispatch(setIsOpenedDialogAddBoard(true));

    if (sideDrawer) {
      dispatch(closeSideDrawer());
    }
  };

  return (
    <Button color="primary" variant="plain" onClick={onClick} sx={{ minWidth: '150px' }}>
      {t('createNewBoard')}
    </Button>
  );
};
