import React, { useState } from 'react';
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
  const [scrollThreshold, setScrollThreshold] = useState(false)

  const changeNavbarColor = () => {
    if (window.scrollY >= 721) {
      setScrollThreshold(true);
    }
    else {
      setScrollThreshold(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color={scrollThreshold ? 'default' : 'transparent'} className='customnavbar'>
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
            <Button color="inherit">
              <img src='icons/masalogo.png' width={100} />
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <MenuDialog />
    </>
  );
}
export default Header;