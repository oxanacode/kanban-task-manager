import Box from '@mui/joy/Box';

import promo from '../../assets/images/promo.svg';

export const Welcome = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', mt: 10 }}>
      {/* <Sheet sx={{ display: 'flex', height: '300px', borderRadius: 50 }} variant="solid" color="primary"></Sheet> */}
      <div
        style={{
          width: '100%',
          backgroundColor: '#39A1FF',
          borderRadius: '50px',
        }}
      >
        <Box component="img" src={promo} alt="Astronaut promo image"></Box>
      </div>
    </Box>
  );
};
