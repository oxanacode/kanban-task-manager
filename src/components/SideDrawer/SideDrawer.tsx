import Box, { BoxProps } from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import { MouseEventHandler } from 'react';

export const SideDrawer = ({ onClose, ...props }: BoxProps & { onClose: MouseEventHandler<HTMLDivElement> }) => {
  return (
    <Box
      {...props}
      sx={[
        { position: 'fixed', zIndex: 1200, width: '100%', height: '100%' },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    >
      <Box
        role="button"
        onClick={onClose}
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: (theme) => `rgba(${theme.vars.palette.neutral.darkChannel} / 0.8)`,
        }}
      />
      <Sheet
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          minWidth: 256,
          width: 'max-content',
          height: '100%',
          position: 'absolute',
          right: 0,
          p: 2,
          boxShadow: 'lg',
          bgcolor: 'background.componentBg',
        }}
      >
        {props.children}
      </Sheet>
    </Box>
  );
};
