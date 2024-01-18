import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import { openDialog } from './store/layoutSlice';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Grid, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router';
import { navigationConfig } from '../configs/navigation/navigationConfig';
import "./Header.css";

function Header() {
  const [scrollThreshold] = useState(false)
  const { scrollY } = useScroll()
  const [toggle, setToggle] = useState(false)
  const location = useLocation();

  const navigate = useNavigate();
  const menuCategories = ['Overview', 'About MASA-Dearborn', 'Our Projects']

  useEffect(() => {
    window.scrollTo(0, 0)
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

  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -1 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

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
          <Grid container spacing={0} justifyContent="center" alignItems={"center"}>
            <Grid xs={1} display="flex" justifyContent="flex-start">
              {toggle ?
                <img src='/icons/MASA Logo Color.svg' className='navBrandLogo' width={150} /> :
                <img src='/icons/MASA Logo White.svg' className='navBrandLogo' width={150} />}
            </Grid>
            <Grid xs={11} display="flex" justifyContent="flex-end">
              {navigationConfig.map((menuItem, index) =>
                <>
                  <Grid spacing={0} key={index} lg={menuItem.size} sx={{ display: { xs: "none", lg: "block flex" }, justifyContent: { lg: "flex-end" } }} display="flex" justifyContent="center">
                    <motion.li
                      style={{ listStyleType: "none" }}
                      variants={variants}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className={location.pathname === menuItem.url ? 'menu-button-active' : toggle ? 'menu-toggle-button' : 'menu-button'} startIcon={menuItem.icon}
                        onClick={() => {
                          navigate(menuItem.url)
                        }}>
                        {menuItem.name}
                      </Button>
                    </motion.li>
                  </Grid>
                  <Grid spacing={0} key={index} xs={2} sx={{ display: { xs: "block flex", lg: "none" }, justifyContent: { xs: "flex-end" } }} display="flex" justifyContent="center">
                    <motion.li
                      style={{ listStyleType: "none" }}
                      variants={variants}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className={location.pathname === menuItem.url ? 'menu-button-small-active' : toggle ? 'menu-toggle-button-small' : 'menu-button-small'}
                        onClick={() => {
                          navigate(menuItem.url)
                        }}>
                        {menuItem.icon}
                      </Button>
                    </motion.li>
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </AnimatePresence>
  );
}
export default Header;