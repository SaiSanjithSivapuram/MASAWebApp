import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import { openDialog } from './store/layoutSlice';
import MenuDialog from './MenuDialog';

function Header() {
  const dispatch = useDispatch()

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => dispatch(openDialog())}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 9 }}>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Countdown for Rocket 00 : 00 : 00
            </Typography>
            <Button color="inherit">MASA</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <MenuDialog />
    </>
  );
}
export default Header;