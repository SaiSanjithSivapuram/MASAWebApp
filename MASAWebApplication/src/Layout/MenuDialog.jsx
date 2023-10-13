import React, { forwardRef, useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { closeDialog } from './store/layoutSlice';
import Grow from '@mui/material/Grow';
import { DialogContent, Divider, Grid } from '@mui/material';
import { useNavigate } from 'react-router';
import "./MenuDialog.css"
import { navigationConfig } from '../configs/navigation/navigationConfig';

const Transition = forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
});

function MenuDialog() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const dialogtoggle = useSelector(state => state.layout.dialog.open)

  const menuCategories = ['Overview', 'About MASA-Dearborn', 'Our Projects', 'Media']

  return (
    <div>
      <Dialog
        fullScreen
        open={dialogtoggle}
        onClose={() => dispatch(closeDialog())}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }} className='menu-header'>
          <Grid container spacing={0} alignItems="center" style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Grid xs={3} sm={2} lg={1} display="flex" justifyContent="center">
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => dispatch(closeDialog())}
                aria-label="close"
                className='menu-close-button'
              >
                <CloseIcon />
              </IconButton>
            </Grid>
            <Grid xs={6} sm={8} lg={10} display="flex" justifyContent="center">
              <img src='icons/masalogo.png' width={100} className='menu-logo' />
            </Grid>
          </Grid>
        </AppBar>
        <DialogContent className='menu-content'>
          {menuCategories.map((category) => {
            return (
              <div className='menu-cards'>
                <Grid container spacing={0} alignItems="center">
                  <Grid xs={12} display="flex" justifyContent="center">
                    <Typography variant="h6" component="div" color="#032e63">
                      {category}
                    </Typography>
                  </Grid>
                </Grid>
                {/* <Divider sx={{ borderBottomWidth: 0.5, borderColor: "#FFFFFF", marginTop: "5px" }} /> */}
                <Grid container spacing={0} alignItems="center">
                  {navigationConfig[category].map((menuItem, index) =>
                    <Grid key={index} xs={12} lg={menuItem.size} display="flex" justifyContent="center" style={{ marginTop: "15px" }}>
                      <Button className='menu-button' startIcon={menuItem.icon}
                        onClick={() => {
                          navigate(menuItem.url)
                          dispatch(closeDialog())
                        }}>
                        {menuItem.name}
                      </Button>
                    </Grid>
                  )}
                </Grid>
              </div>)
          })}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default MenuDialog;