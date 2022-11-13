import Box from '@mui/joy/Box';

import { AdvantageSection } from '../../components/Welcome/AdvantageSection';

import { PromoSection } from '../../components/Welcome/PromoSection';

export const Welcome = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, mx: 2, my: 4 }}>
      <PromoSection />
      <AdvantageSection />
    </Box>
  );
};
