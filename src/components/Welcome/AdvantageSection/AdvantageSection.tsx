import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import { useTranslation } from 'react-i18next';

import advOne from '../../../assets/images/advantage-1.svg';
import advTwo from '../../../assets/images/advantage-2.svg';
import advThree from '../../../assets/images/advantage-3.svg';

export const AdvantageSection = () => {
  const { t } = useTranslation();
  const content = [t('firstAdvantage'), t('secondAdvantage'), t('thirdAdvantage')];
  const images = [advOne, advTwo, advThree];

  const cards = content.map((text, i) => (
    <Card sx={{ display: 'flex', borderRadius: 50, width: '100%', p: 4 }} key={text}>
      <Box
        component="img"
        src={images[i]}
        alt="Promo advantage"
        sx={{
          width: '100%',
          maxHeight: '200px',
        }}
      />
      <Typography level="h5" component="h3" sx={{ textAlign: 'center', fontWeight: 300 }}>
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
