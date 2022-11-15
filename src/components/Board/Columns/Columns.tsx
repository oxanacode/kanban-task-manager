import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAppDispatch } from '../../../store/hooks';

import { useGetColumnsInBoardQuery } from '../../../store/slices/board/boardApi';
import { openAddColumnModal } from '../../../store/slices/board/boardSlice';

export const Columns = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id?: string }>();
  const { data, isError } = useGetColumnsInBoardQuery(id || '');
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isError) {
      toast.error('Error');
    }
  }, [isError]);

  const handleClick = () => {
    dispatch(openAddColumnModal());
  };

  const boardColumns = data?.map((column) => (
    <Box key={column._id} sx={{ width: 260, flexShrink: 0 }}>
      <Typography component="h4" sx={{ fontSize: { xs: 16, sm: 24 } }}>
        {column.title}
      </Typography>
    </Box>
  ));

  return (
    <Box sx={{ flexGrow: 1, position: 'relative' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          overflowX: 'auto',
          position: 'absolute',
          gap: 1,
          inset: 0,
          pr: 2,
        }}
      >
        {boardColumns}
        <Button startDecorator={<AddRoundedIcon />} sx={{ width: 260, flexShrink: 0 }} onClick={handleClick}>
          {t('newColumn')}
        </Button>
      </Box>
    </Box>
  );
};
