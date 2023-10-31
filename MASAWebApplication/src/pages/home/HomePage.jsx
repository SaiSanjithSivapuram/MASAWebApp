import React, { useState } from 'react'
import { Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Icon, Typography } from '@mui/material'
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import DescriptionIcon from '@mui/icons-material/Description';
import SocialMedia from '../../component/social_media/social_media';
import { AnimatePresence, motion } from 'framer-motion';
import MemoryIcon from '@mui/icons-material/Memory';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Countdown from 'react-countdown';
import "./Home.css"

function HomePage() {
  const mainTeam = [
    {
      name: "Andrey",
      organization: "Leadership",
      description: "I am Andrea. I am currently the Electrical Team Lead handling the circuit functionality of rockets."
    },
    {
      name: "Bruna",
      organization: "Mechanical",
      description: "I am Andrea. I am currently the Electrical Team Lead handling the circuit functionality of rockets."
    },
    {
      name: "Andrea",
      organization: "Electirc",
      description: "I am Andrea. I am currently the Electrical Team Lead handling the circuit functionality of rockets."
    },
    {
      name: "Perla",
      organization: "Project Management",
      description: "I am Andrea. I am currently the Electrical Team Lead handling the circuit functionality of rockets."
    }
  ]

  const cardBgAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        delay: 0.2,
        delayChildren: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const cardAnimation = {
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
    }
  }

  const slideLeftAnimation = {
    hidden: { x: 40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        delay: 0.2
      }
    }
  }

  const slideRightAnimation = {
    hidden: { x: -40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        delay: 0.2
      }
    }
  }

  const timerRender = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return 'Rocket Is Live';
    } else {
      return (
        <Grid container spacing={0} justifyContent="space-around">
          <Grid xs={3} display="flex" justifyContent="center">
            <Typography sx={{ typography: { xs: 'h4' } }} className='card-time-title'
              component={motion.div}
              variants={slideLeftAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {days} </Typography>
          </Grid>
          <Grid xs={3} display="flex" justifyContent="center">
            <Typography sx={{ typography: { xs: 'h4' } }} className='card-time-title'
              component={motion.div}
              variants={slideLeftAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {hours} </Typography>
          </Grid>
          <Grid xs={3} display="flex" justifyContent="center">
            <Typography sx={{ typography: { xs: 'h4' } }} className='card-time-title'
              component={motion.div}
              variants={slideLeftAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {minutes} </Typography>
          </Grid>
          <Grid xs={3} display="flex" justifyContent="center">
            <Typography sx={{ typography: { xs: 'h4' } }} className='card-time-title'
              component={motion.div}
              variants={slideLeftAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {seconds} </Typography>
          </Grid>
          <Grid xs={3} display="flex" justifyContent="center">
            <Typography sx={{ typography: { xs: 'h6' } }} className='card-time-title'
              component={motion.div}
              variants={slideLeftAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              days </Typography>
          </Grid>
          <Grid xs={3} display="flex" justifyContent="center">
            <Typography sx={{ typography: { xs: 'h6' } }} className='card-title'
              component={motion.div}
              variants={slideLeftAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              hours </Typography>
          </Grid>
          <Grid xs={3} display="flex" justifyContent="center">
            <Typography sx={{ typography: { xs: 'h6' } }} className='card-title'
              component={motion.div}
              variants={slideLeftAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              minutes </Typography>
          </Grid>
          <Grid xs={3} display="flex" justifyContent="center">
            <Typography sx={{ typography: { xs: 'h6' } }} className='card-title'
              component={motion.div}
              variants={slideLeftAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              seconds </Typography>
          </Grid>
        </Grid>);
    }
  };

  return (
    <div>
      <div className='main-img' style={{ backgroundImage: "linear-gradient(rgba(3, 46, 99, 0.4), rgba(3, 46, 99, 0.4)), url('RocketImage.jpeg')" }}>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Grid container spacing={0} justifyContent="center">
              <Grid xs={12} display="flex" justifyContent="center" className='main-icon-grid'>
                <img src='icons/shuttle-space-solid.gif' width={100} />
              </Grid>
            </Grid>
            <Grid container spacing={0} justifyContent="center">
              <Grid xs={12} display="flex" justifyContent="center">
                <Typography sx={{ typography: { md: 'h2', xs: 'h5' } }} color="white" className='main-title'>REACHING FOR THE STARS...</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={0} justifyContent="center">
              <Grid xs={12} display="flex" justifyContent="center">
                <Button
                  edge="start"
                  className='launch-btn'
                  startIcon={<MemoryIcon />}
                  variant='outlined'
                  component={motion.div}
                  whileHover={{
                    scale: 1.15,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Typography variant='p' className='header-title'
                    component={motion.div}
                    variants={slideLeftAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    LAUNCH</Typography>
                </Button>
              </Grid>
            </Grid>
          </motion.div>
        </AnimatePresence>
      </div>
      <div>
        <Grid container spacing={0} justifyContent="center">
          <Grid xs={12} lg={6} display="flex" justifyContent={{ xs: "center", lg: "flex-end" }}>
            <Typography sx={{ typography: { md: 'h4', xs: 'h6' } }} className='intro-title title2'
              component={motion.div}
              variants={slideLeftAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              MICHIGAN</Typography>
            <Typography sx={{ typography: { md: 'h4', xs: 'h6' } }} className='intro-title title1'
              component={motion.div}
              variants={slideLeftAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              AERONAUTICAL</Typography>
          </Grid>
          <Grid xs={12} lg={5} display="flex" justifyContent={{ xs: "center", lg: "flex-start" }}>
            <Typography sx={{ typography: { md: 'h4', xs: 'h6' } }} className='intro-title title1'
              component={motion.div}
              variants={slideLeftAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              SCIENCE</Typography>
            <Typography sx={{ typography: { md: 'h4', xs: 'h6' } }} className='intro-title title2'
              component={motion.div}
              variants={slideLeftAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              ASSOCIATION</Typography>
          </Grid>
          <Grid xs={11} display="flex" justifyContent="center">
            <Typography sx={{ typography: { md: 'p', xs: 'p' } }} className='intro-description'
              component={motion.div}
              variants={slideRightAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Welcome to the official website of the Michigan Aeronautical Science Association-Dearborn.
              MASA-Dearborn is a rocketry team at the University of Michigan-Dearborn made up of engineering, science, arts, and business students who work together to build an innovative high powered rocket. The group was founded in 2015 with the goal of being an avenue for students to learn about rocketry and apply their theoretical knowledge to a real life technical project. Each year the group competes at the Spaceport America Cup in Las Cruces, New Mexico where they attempt to launch a rocket to 30,000ft. We implore you to browse through our website to learn about MASA-Dearborn and experimental rocketry.</Typography>
          </Grid>
          <Grid xs={12} display="flex" justifyContent="center">
            <Button
              edge="start"
              className='page-btn'
              startIcon={<YouTubeIcon />}
              variant='outlined'
              component={motion.a}
              variants={slideLeftAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.15,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9 }}
              href='https://youtu.be/XFDlKn3lNmc?si=UL_sxb5gt2ckBhJo'
              target='blank'
            >
              <Typography variant='p' className='header-title'
                component={motion.div}
                variants={slideLeftAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Watch Our Feature Video</Typography>
            </Button>
          </Grid>
        </Grid>
      </div>
      <div className='sponsers-content'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Grid container spacing={0} justifyContent="space-around">
            <Grid xs={12} lg={5} display="flex" justifyContent="flex-end">
              <Card className='sponsers-card' sx={{ padding: "20px 0px", margin: "20px auto", width: "100%" }}
                component={motion.div}
                whileHover={{ scale: 1.02 }}
              >
                <CardHeader title={
                  <Grid container spacing={0} justifyContent="flex-start">
                    <Grid xs={12} display="flex" justifyContent="center">
                      <Typography sx={{ typography: { xs: 'h6' } }} className='card-title'
                        component={motion.div}
                        variants={slideLeftAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        OUR SPONSERS</Typography>
                    </Grid>
                  </Grid>
                } />
                <CardContent>
                  <Grid container spacing={0} justifyContent="center" alignItems="center">
                    <Grid xs={12} lg={4} display="flex" justifyContent="center">
                      <img src='ford.png' width={"40%"} height={"90%"} />
                    </Grid>
                    <Grid xs={12} lg={4} display="flex" justifyContent="center">
                      <img src='umichcecs.png' width={"40%"} height={"90%"} />
                    </Grid>
                    <Grid xs={12} lg={4} display="flex" justifyContent="center">
                      <img src='bssolidworks.png' width={"60%"} height={"65%"} />
                    </Grid>
                    <Grid xs={12} lg={4} display="flex" justifyContent="center">
                      <img src='patriot-tool.png' width={"45%"} height={"100%"} style={{ paddingTop: "10px" }} />
                    </Grid>
                    <Grid xs={12} lg={4} display="flex" justifyContent="center">
                      <img src='hugnes.png' width={"60%"} height={"60%"} style={{ paddingTop: "10px" }} />
                    </Grid>
                    <Grid xs={12} lg={4} display="flex" justifyContent="center">
                      <img src='ansys.png' width={"40%"} height={"60%"} style={{ paddingTop: "10px" }} />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={12} lg={5} display="flex" justifyContent="flex-start">
              <Card className='sponsers-card' sx={{ padding: "20px 0px", margin: "20px auto", width: "100%" }}
                component={motion.div}
                whileHover={{ scale: 1.02 }}
              >
                <CardHeader title={
                  <Grid container spacing={0} justifyContent="flex-start">
                    <Grid xs={12} display="flex" justifyContent="center">
                      <Typography sx={{ typography: { xs: 'h6' } }} className='card-title'
                        component={motion.div}
                        variants={slideLeftAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        ROCKET UP IN</Typography>
                    </Grid>
                  </Grid>
                } />
                <CardContent>
                  <Grid container spacing={0} justifyContent="center" alignItems="center">
                    <Grid xs={12} display="flex" justifyContent="center">
                      <Countdown date={'2024-05-20T10:00:00'} renderer={timerRender} />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </motion.div>
      </div>
      <div className='core-team-content'>
        <Card className='core-team-bg'
          component={motion.ul}
          variants={cardBgAnimation}
          initial="hidden"
          whileInView="visible"
          // whileHover={{ scale: 1.02 }}
          // whileTap={{ scale: 0.98 }}
          viewport={{ once: true }}
        >
          <Grid container spacing={0} justifyContent="center">
            <Grid xs={12} display="flex" justifyContent="center">
              <Typography sx={{ typography: { md: 'h3', xs: 'h5' } }} className='intro-title title2'
                component={motion.div}
                variants={slideLeftAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                LEAD TEAM</Typography>
            </Grid>
            {mainTeam.map((member, index) => {
              return (
                <Grid xs={12} lg={3} display="flex" justifyContent="center">
                  <Card sx={{ width: 300, position: "relative" }} className='core-team-card'
                    component={motion.li}
                    variants={cardAnimation}
                    whileHover={{
                      scale: 1.01,
                      transition: { duration: 0.2, type: "tween" },
                    }}
                    whileTap={{ scale: 0.9 }}
                    viewport={{ once: true }}
                  >
                    <CardActionArea>
                      <motion.div layout>
                        <CardMedia
                          component="img"
                          height="290"
                          image={`team-members/${member.name}.png`}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Grid container spacing={0} justifyContent="center" style={{ position: 'absolute', bottom: 170 }}>
                            <Grid xs={12} display="flex" justifyContent="flex-start">
                              <Typography variant="h5" component="div" color="white" className='core-team-card-content'>
                                {member.name.toUpperCase()}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container spacing={0} justifyContent="center">
                            <Grid xs={1.5} display="flex" justifyContent="flex-start">
                              <Icon>
                                <CorporateFareIcon />
                              </Icon>
                            </Grid>
                            <Grid xs={10.5} display="flex" justifyContent="flex-start">
                              <Typography gutterBottom variant="body1" className='core-team-card-content org'>
                                {member.organization.toUpperCase()}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid container spacing={0} justifyContent="center">
                            <Grid xs={1.5} display="flex" justifyContent="flex-start">
                              <Icon>
                                <DescriptionIcon />
                              </Icon>
                            </Grid>
                            <Grid xs={10.5} display="flex" justifyContent="flex-start">
                              <Typography variant="body1" className='core-team-card-content description'>
                                {member.description}
                              </Typography>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </motion.div>
                    </CardActionArea>
                  </Card>
                </Grid>
              )
            })
            }
          </Grid>
        </Card>
      </div>
      <div className='social-media-content'>
        <Grid container spacing={0} justifyContent="center">
          <Grid xs={12} display="flex" justifyContent="center">
            <Typography sx={{ typography: { md: 'h3', xs: 'h5' } }} className='intro-title'>OUR SOCIAL</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={0} justifyContent="center">
          {/* <Grid xs={12} display="flex" justifyContent="center"> */}
          {/* <Card className='social-media-card' sx={{ width: "95vw" }}> */}
          <SocialMedia />
          {/* </Card> */}
          {/* </Grid> */}
        </Grid>
      </div>
    </div >
  )
}

export default HomePage
