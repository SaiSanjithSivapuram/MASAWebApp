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
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import BoltIcon from '@mui/icons-material/Bolt';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import Groups2Icon from '@mui/icons-material/Groups2';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import RocketIcon from '@mui/icons-material/Rocket';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PaidIcon from '@mui/icons-material/Paid';
import VideocamIcon from '@mui/icons-material/Videocam';
import { useNavigate } from 'react-router';
import "./MenuDialog.css"

const Transition = forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
});

function MenuDialog() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const dialogtoggle = useSelector(state => state.layout.dialog.open)

  const menuCategories = ['Overview', 'About MASA-Dearborn', 'Our Projects', 'Media']
  const menuData = {
    "Overview": [
      {
        icon: <HomeIcon />,
        name: "Home",
        url: "/",
        size: 3,
      },
      {
        icon: <InfoIcon />,
        name: "About Masa-Dearborn",
        url: "/aboutus",
        size: 3,
      },
      {
        icon: <RocketIcon />,
        name: "Our Projects",
        url: "/projects",
        size: 3,
      },
      {
        icon: <PaidIcon />,
        name: "Sponsors",
        url: "/home",
        size: 3,
      },
      {
        icon: <VideocamIcon />,
        name: "Media",
        url: "/home",
        size: 3,
      },
      {
        icon: <RocketLaunchIcon />,
        name: "Launch Facilities",
        url: "/home",
        size: 3,
      },
    ],
    "Our Projects": [
      {
        icon: <RocketIcon />,
        name: "Project HAZMAT",
        url: "/leadershipteam",
        size: 3,
      },
      {
        icon: <RocketIcon />,
        name: "Certification Flights",
        url: "/projectmanagement",
        size: 3,
      },
      {
        icon: <RocketIcon />,
        name: "Project 2 Boosted 2 Bear",
        url: "/electricalteam",
        size: 3,
      },
      {
        icon: <RocketIcon />,
        name: "Project Boosted Bear",
        url: "/mechanicalteam",
        size: 3,
      },
      {
        icon: <RocketIcon />,
        name: "Project Overwatch",
        url: "/mechanicalteam",
        size: 3,
      },
      {
        icon: <RocketIcon />,
        name: "Test Rocket Series",
        url: "/mechanicalteam",
        size: 3,
      }
    ],
    "About MASA-Dearborn": [
      {
        icon: <Groups2Icon />,
        name: "Leadership Team",
        url: "/leadershipteam",
        size: 3,
      },
      {
        icon: <AccountTreeIcon />,
        name: "Project Management Team",
        url: "/projectmanagement",
        size: 3,
      },
      {
        icon: <BoltIcon />,
        name: "Electrical Team",
        url: "/electricalteam",
        size: 3,
      },
      {
        icon: <PrecisionManufacturingIcon />,
        name: "Mechanical Team",
        url: "/mechanicalteam",
        size: 3,
      }
    ],
    "Media": [
      {
        icon: <CalendarMonthIcon />,
        name: "2016-2017",
        url: "/leadershipteam",
        size: 3,
      },
      {
        icon: <CalendarMonthIcon />,
        name: "2017-2018",
        url: "/projectmanagement",
        size: 3,
      },
      {
        icon: <CalendarMonthIcon />,
        name: "2018-2019",
        url: "/electricalteam",
        size: 3,
      },
      {
        icon: <CalendarMonthIcon />,
        name: "2021-2022",
        url: "/mechanicalteam",
        size: 3,
      }
    ]
  }

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
            <Grid xs={2} display="flex" justifyContent="center">
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
            <Grid xs={8} display="flex" justifyContent="center">
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
                  {menuData[category].map((menuItem, index) =>
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