import React, { lazy } from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Grid, Icon, Typography } from '@mui/material'
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import DescriptionIcon from '@mui/icons-material/Description';
import { AnimatePresence, motion } from 'framer-motion';
import MemoryIcon from '@mui/icons-material/Memory';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Countdown from 'react-countdown';
import { LeadTeamData } from '../../data/LeadTeamData';
import { useNavigate } from 'react-router';
import "./Home.css";
import { SocialMediaData } from '../../data/SocialMediaData';
import { Link as ScrollLink } from 'react-scroll';
const InstagramCarousel = lazy(() => import('../../component/instagram_carousel/InstagramCarousel'));

function HomePage() {

  const navigate = useNavigate();

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
            <Typography sx={{ typography: { xs: 'h5', md: 'h3' } }} className='card-bg-time-title'
              component={motion.div}
              variants={slideLeftAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {days} </Typography>
          </Grid>
          <Grid xs={3} display="flex" justifyContent="center">
            <Typography sx={{ typography: { xs: 'h5', md: 'h3' } }} className='card-bg-time-title'
              component={motion.div}
              variants={slideLeftAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {hours} </Typography>
          </Grid>
          <Grid xs={3} display="flex" justifyContent="center">
            <Typography sx={{ typography: { xs: 'h5', md: 'h3' } }} className='card-bg-time-title'
              component={motion.div}
              variants={slideLeftAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {minutes} </Typography>
          </Grid>
          <Grid xs={3} display="flex" justifyContent="center">
            <Typography sx={{ typography: { xs: 'h5', md: 'h3' } }} className='card-bg-time-title'
              component={motion.div}
              variants={slideLeftAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {seconds} </Typography>
          </Grid>
          <Grid xs={3} display="flex" justifyContent="center">
            <Typography sx={{ typography: { xs: 'p', md: 'h6' } }} className='card-bg-time-title'
              component={motion.div}
              variants={slideLeftAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              days </Typography>
          </Grid>
          <Grid xs={3} display="flex" justifyContent="center">
            <Typography sx={{ typography: { xs: 'p', md: 'h6' } }} className='card-bg-time-title'
              component={motion.div}
              variants={slideLeftAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              hours </Typography>
          </Grid>
          <Grid xs={3} display="flex" justifyContent="center">
            <Typography sx={{ typography: { xs: 'p', md: 'h6' } }} className='card-bg-time-title'
              component={motion.div}
              variants={slideLeftAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              minutes </Typography>
          </Grid>
          <Grid xs={3} display="flex" justifyContent="center">
            <Typography sx={{ typography: { xs: 'p', md: 'h6' } }} className='card-bg-time-title'
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
      <div className='main-img' style={{ backgroundImage: "linear-gradient(rgba(3, 46, 99, 0.7), rgba(3, 46, 99, 0.2)), url('/MASAMainBg.jpeg')" }}>
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
                <Typography sx={{ typography: { xs: 'h5', md: 'h3', lg: 'h3' } }} color="white" className='main-title'>FROM DESIGN TO APOGEE</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={0} justifyContent="center">
              <Grid xs={12} display="flex" justifyContent="center">
                <ScrollLink to='launch' spy={true} smooth={true} delay={100} offset={-90}>
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
                    <Typography variant='p' fontSize={"16px"} className='header-title'
                      component={motion.div}
                      variants={slideLeftAnimation}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      LAUNCH</Typography>
                  </Button>
                </ScrollLink>
              </Grid>
            </Grid>
          </motion.div>
        </AnimatePresence>
      </div>
      <div id='launch' style={{ paddingTop: "20px" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.4 } }}
          viewport={{ once: true }}
        >
          <Grid container spacing={0} justifyContent="center">
            <Grid xs={12} display="flex" justifyContent="center">
              <Card className='sponsers-card' sx={{ margin: "20px auto", width: "92%" }}
                component={motion.div}
                whileHover={{ scale: 1.02 }}
              >
                <CardHeader className='intro-header' title={
                  <Grid container spacing={0} display="flex" justifyContent="center">
                    <Grid xs={12} lg={12} display="flex" justifyContent="center">
                      <Typography id='homeHeader' variant='p' fontSize={{ xs: "12px", md: "30px", lg: "40px" }} className='intro-title title2'
                        component={motion.div}
                        variants={slideLeftAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        MICHIGAN AERONAUTICAL SCIENCE ASSOCIATION</Typography>
                    </Grid>
                  </Grid>
                } />
                <CardContent>
                  <Grid container spacing={0} justifyContent="center" alignItems="center">
                    <Grid xs={12} display="flex" justifyContent="center">
                      <Typography sx={{ typography: { md: 'p', xs: 'p' }, fontSize: '18px', textAlign: "justify" }} className='intro-description'
                        component={motion.div}
                        variants={slideRightAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        Welcome to the official website of the Michigan Aeronautical Science Association-Dearborn. MASA-Dearborn is a rocketry team at the University of Michigan-Dearborn made up of engineering, science, arts, and business students who work together to build an innovative high powered rocket. The group was founded in 2015 with the goal of being an avenue for students to learn about rocketry and apply their theoretical knowledge to a real life technical project. Each year the group competes at the Spaceport America Cup in Las Cruces, New Mexico where they attempt to launch a rocket to 30,000ft. We implore you to browse through our website to learn about MASA-Dearborn and experimental rocketry.</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions>
                  <Grid container spacing={0} justifyContent="center" alignItems="center">
                    <Grid xs={12} display="flex" justifyContent="center">
                      <Button
                        fullWidth
                        edge="start"
                        className='page-btn'
                        startIcon={<YouTubeIcon />}
                        variant='outlined'
                        component={motion.a}
                        variants={slideLeftAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileTap={{ scale: 0.9 }}
                        href='https://youtu.be/XFDlKn3lNmc?si=UL_sxb5gt2ckBhJo'
                        target='blank'
                      >
                        <Typography variant='p' fontSize={"16px"} className='header-title'
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
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </motion.div>
      </div>
      <div className='sponsers-content' style={{ width: "96vw", margin: "0px auto" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.4 } }}
          viewport={{ once: true }}
        >
          <Grid container spacing={0} justifyContent="space-around">
            <Grid xs={12} lg={6} display="flex" justifyContent="flex-end">
              <Card className='sponsers-card' sx={{ padding: "20px 0px", margin: "20px auto", width: "92%" }}
                component={motion.div}
                whileHover={{ scale: 1.02 }}
              >
                <CardHeader title={
                  <Grid container spacing={0} justifyContent="flex-start">
                    <Grid xs={12} display="flex" justifyContent="center">
                      <Typography sx={{ typography: { xs: 'h6' } }} className='title1'
                        component={motion.div}
                        variants={slideLeftAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        OUR SPONSORS</Typography>
                    </Grid>
                  </Grid>
                } />
                <CardContent>
                  <Grid container spacing={0} justifyContent="center" alignItems="center">
                    <Grid md={4} lg={4} justifyContent="center" sx={{ display: { xs: "none", md: "block flex", lg: "block flex" }, paddingTop: "20px" }}>
                      <img src='umichcecs.png' width={"50%"} height={"90%"} />
                    </Grid>
                    <Grid md={4} lg={4} justifyContent="center" sx={{ display: { xs: "none", md: "block flex", lg: "block flex" }, paddingTop: "20px" }}>
                      <img src='bssolidworks.png' width={"70%"} height={"65%"} />
                    </Grid>
                    <Grid md={4} lg={4} justifyContent="center" sx={{ display: { xs: "none", md: "block flex", lg: "block flex" }, paddingTop: "20px" }}>
                      <img src='Blue-Origin.png' width={"50%"} height={"90%"} />
                    </Grid>
                    <Grid md={4} lg={4} justifyContent="center" sx={{ display: { xs: "none", md: "block flex", lg: "block flex" }, paddingTop: "20px" }}>
                      <img src='Magna.png' width={"60%"} height={"90%"} />
                    </Grid>
                    <Grid md={4} lg={4} justifyContent="center" sx={{ display: { xs: "none", md: "block flex", lg: "block flex" }, paddingTop: "20px" }}>
                      <img src='TripleInc.png' width={"60%"} height={"90%"} />
                    </Grid>
                    <Grid md={4} lg={4} justifyContent="center" sx={{ display: { xs: "none", md: "block flex", lg: "block flex" }, paddingTop: "20px" }}>
                      <img src='LormaxStern.png' width={"60%"} height={"90%"} />
                    </Grid>
                    <Grid md={4} lg={4} justifyContent="center" sx={{ display: { xs: "none", md: "block flex", lg: "block flex" }, paddingTop: "20px" }}>
                      <img src='DassaultSystemes.png' width={"60%"} height={"90%"} />
                    </Grid>

                    <Grid xs={12} justifyContent="center" sx={{ display: { xs: "block flex", md: "none", lg: "none" }, paddingTop: { xs: "10px" } }}>
                      <img src='umichcecs.png' width={"30%"} height={"90%"} />
                    </Grid>
                    <Grid xs={12} justifyContent="center" sx={{ display: { xs: "block flex", md: "none", lg: "none" }, paddingTop: { xs: "30px" } }}>
                      <img src='bssolidworks.png' width={"40%"} height={"65%"} />
                    </Grid>
                    <Grid xs={12} justifyContent="center" sx={{ display: { xs: "block flex", md: "none", lg: "none" }, paddingTop: { xs: "40px" } }}>
                      <img src='Blue-Origin.png' width={"30%"} height={"90%"} />
                    </Grid>
                    <Grid xs={12} justifyContent="center" sx={{ display: { xs: "block flex", md: "none", lg: "none" }, paddingTop: { xs: "0px" } }}>
                      <img src='Magna.png' width={"50%"} height={"90%"} />
                    </Grid>
                    <Grid xs={12} justifyContent="center" sx={{ display: { xs: "block flex", md: "none", lg: "none" }, paddingTop: { xs: "10px" } }}>
                      <img src='TripleInc.png' width={"40%"} height={"90%"} />
                    </Grid>
                    <Grid xs={12} justifyContent="center" sx={{ display: { xs: "block flex", md: "none", lg: "none" }, paddingTop: { xs: "20px" } }}>
                      <img src='LormaxStern.png' width={"40%"} height={"90%"} />
                    </Grid>
                    <Grid xs={12} justifyContent="center" sx={{ display: { xs: "block flex", md: "none", lg: "none" }, paddingTop: { xs: "30px" } }}>
                      <img src='DassaultSystemes.png' width={"40%"} height={"90%"} />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={12} lg={6} display="flex" justifyContent="flex-start">
              <Card className='sponsers-card' sx={{ padding: "20px 0px", margin: "20px auto", width: "92%" }}
                component={motion.div}
                whileHover={{ scale: 1.02 }}
                style={{ backgroundImage: "linear-gradient(rgba(3, 46, 99, 0.4), rgba(3, 46, 99, 0.4)), url('/MASAMainBg.jpeg')" }}
              >
                <CardHeader title={
                  <Grid container spacing={0} justifyContent="flex-start">
                    <Grid xs={12} display="flex" justifyContent="center">
                      <Typography sx={{ typography: { xs: 'p', md: 'h6' } }} className='card-bg-time-title'
                        component={motion.div}
                        variants={slideLeftAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        PROJECT VULCAN UP IN</Typography>
                    </Grid>
                  </Grid>
                } />
                <CardContent>
                  <Grid container spacing={0} justifyContent="center" alignItems="center">
                    <Grid xs={12} display="flex" justifyContent="center">
                      <Countdown date={'2024-06-19T07:00:00'} renderer={timerRender} />
                    </Grid>
                    <Grid xs={12} display="flex" justifyContent="center">
                      <Button
                        edge="start"
                        className='rocket-btn'
                        variant='outlined'
                        component={motion.div}
                      >
                        <Typography variant='p' fontSize={"16px"} className='header-title'
                          component={motion.div}
                          variants={slideLeftAnimation}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          KNOW MORE ABOUT VULCAN</Typography>
                      </Button>
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
          viewport={{ once: true }}
        >
          <CardHeader className='intro-title-team' title={
            <Grid container spacing={0} justifyContent="center" className='intro-title'>
              <Grid xs={12} display="flex" justifyContent="center">
                <Typography sx={{ typography: { md: 'h3', xs: 'h5' } }} className='title1'
                  component={motion.div}
                  variants={slideLeftAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  LEADERS</Typography>
              </Grid>
            </Grid>
          } />
          <CardContent>
            <Grid container spacing={0} justifyContent="center">
              {LeadTeamData.map((member, index) => {
                return (
                  <Grid xs={12} md={5} lg={3} display="flex" justifyContent="center">
                    <Card sx={{ width: 300, position: "relative" }} className='core-team-card'
                      component={motion.li}
                      variants={cardAnimation}
                      whileTap={{ scale: 0.9 }}
                      viewport={{ once: true }}
                      onClick={() => { navigate(member.url) }}
                      style={{ backgroundImage: `linear-gradient(rgba(3, 46, 99, 0), rgba(3, 46, 99, 0.45)), url(/team-members/${member.name}.jpeg)` }}
                    >
                      <CardActionArea>
                        <motion.div layout>
                          <CardContent style={{ position: 'absolute', bottom: -400 }} className='core-team-content'>
                            <Grid container spacing={0} justifyContent="center">
                              <Grid xs={12} display="flex" justifyContent="flex-start">
                                <Typography variant="h5" component="div" color="white" className='core-team-card-content team-name'>
                                  {member.name.toUpperCase()}
                                </Typography>
                              </Grid>
                            </Grid>
                            <Grid container spacing={0} justifyContent="center">
                              <Grid xs={12} display="flex" justifyContent="flex-start">
                                <Typography gutterBottom variant="p" fontSize={"15px"} className='core-team-card-content org'>
                                  {member.organization.toUpperCase()}
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
          </CardContent>
        </Card>
      </div>
      <div className='social-media-content'>
        <Grid container spacing={0} justifyContent="center">
          <Grid xs={11} display="flex" justifyContent={{ xs: "center", md: "center" }}>
            <InstagramCarousel items={SocialMediaData['instagram1']} />
          </Grid>
          {/* <Grid xs={12} lg={4} display="flex" justifyContent={{ xs: "center", md: "center" }}>
            <InstagramCarousel items={SocialMediaData['instagram2']} />
          </Grid>
          <Grid xs={12} lg={4} display="flex" justifyContent="center">
            <MediaCarousel />
          </Grid> */}
        </Grid>
      </div>
    </div >
  )
}

export default HomePage
