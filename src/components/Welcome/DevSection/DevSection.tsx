import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import { useTranslation } from 'react-i18next';

import devOne from '../../../assets/images/dev-1.svg';
import devTwo from '../../../assets/images/dev-2.svg';
import devThree from '../../../assets/images/dev-3.svg';

export const DevSection = () => {
  const { t } = useTranslation();
  const content = [t('firstDev'), t('secondDev'), t('thirdDev')];
  const images = [devOne, devTwo, devThree];

  const cards = content.map((text, i) => (
    <Card sx={{ display: 'flex', justifyContent: 'space-between', borderRadius: 40, width: '100%', p: 4 }} key={text}>
      <Box
        component="img"
        src={images[i]}
        alt="Developer avatar"
        sx={{
          width: '100%',
          maxHeight: '200px',
        }}
      />
      <Typography level="h5" component="h3" sx={{ textAlign: 'center', fontWeight: 'sm' }}>
        {text}
      </Typography>
    </Card>
  ));

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', gap: 2 }}>
      {cards}
    </Box>
  );
};
