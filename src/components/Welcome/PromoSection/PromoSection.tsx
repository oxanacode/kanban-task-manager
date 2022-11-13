import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import { useTranslation } from 'react-i18next';

import promoTitleEn from '../../../assets/images/promo-title-en.svg';
import promoTitleRu from '../../../assets/images/promo-title-ru.svg';
import promo from '../../../assets/images/promo.svg';
import { useAppSelector } from '../../../store/hooks';
import { AppLanguage } from '../../../types/LanguageOptions';

export const PromoSection = () => {
  const { t } = useTranslation();
  const { locale } = useAppSelector((state) => state.user);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', sm: 'column-reverse', md: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
        background: '#39A1FF',
        borderRadius: 50,
        p: 2,
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { sm: 'center', md: 'flex-start' }, gap: 2 }}>
        <Box sx={{ display: 'flex' }}>
          <Box
            component="img"
            src={locale === AppLanguage.en ? promoTitleEn : promoTitleRu}
            alt="Promo Title"
            sx={{
              width: '100%',
              maxHeight: '500px',
            }}
          />
        </Box>
        <Typography component="h1" sx={{ display: 'none' }}>
          {t('promoTitle')}
        </Typography>
        <Typography
          component="h2"
          sx={{
            color: '#F8F8F8',
            fontWeight: '300',
            maxWidth: '500px',
            textAlign: { xs: 'center', sm: 'center', md: 'left' },
            mb: 2,
            fontSize: { sm: 24, xs: 18 },
          }}
        >
          {t('promo')}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Box
          component="img"
          src={promo}
          alt="Astronaut promo image"
          sx={{
            width: '100%',
            maxHeight: '500px',
          }}
        />
      </Box>
    </Box>
  );
};
