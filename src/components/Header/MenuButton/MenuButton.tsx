import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/joy';

type MenuButtonProps = {
  openDrawer: () => void;
};

export const MenuButton = ({ openDrawer }: MenuButtonProps) => {
  return (
    <IconButton variant="outlined" size="md" onClick={() => openDrawer()} sx={{ display: { sm: 'none' } }}>
      <MenuIcon />
    </IconButton>
  );
};
