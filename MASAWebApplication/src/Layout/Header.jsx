import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import { openDialog } from './store/layoutSlice';
import MenuDialog from './MenuDialog';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Grid } from '@mui/material';
import { useLocation } from 'react-router';
import "./Header.css";

function Header() {
  const dispatch = useDispatch()
  const [scrollThreshold] = useState(false)
  const { scrollY } = useScroll()
  const [toggle, setToggle] = useState(false)
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0,0)
  }, [location.pathname])

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (location.pathname == '/') {
      if (latest > 50) {
        setToggle(true)
      }
      else if (latest <= 50) {
        setToggle(false)
      }
    }
    else {
      setToggle(true)
    }
  })

  useEffect(() => {
    if (location.pathname == "/") {
      setToggle(false)
    }
    else {
      setToggle(true)
    }
  }, [location.pathname])

  return (
    <AnimatePresence>
      <motion.div
        style={{ position: "fixed", zIndex: "1", width: "100%", height: "50px" }}
        className='customnavbar'
        initial={{ backgroundColor: "transparent", opacity: 0 }}
        animate={toggle ? { backgroundColor: "white", borderRadius: "0px 0px 40px 40px", opacity: 1 } : { backgroundColor: "transparent", borderRadius: "0px", opacity: 0 }}
        transition={{ duration: 0.2, type: "spring", repeatType: "Infinity" }}
      />
      <AppBar position="fixed" color={scrollThreshold ? 'default' : 'transparent'} className='customnavbar'>
        <Toolbar>
          <Grid container spacing={1} justifyContent="center">
            <Grid xs={1} display="flex" justifyContent="flex-start">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                className='navMenuLogoBtn'
                onClick={() => dispatch(openDialog())}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid xs={11} display="flex" justifyContent="flex-end">
              <Button color="inherit" className='navBrandLogo'>
                <img src='/icons/masalogo.png' width={150} />
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <MenuDialog />
    </AnimatePresence>
  );
}
export default Header;