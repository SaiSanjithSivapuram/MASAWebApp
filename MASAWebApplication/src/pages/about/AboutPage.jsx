import React from 'react';
import CableIcon from '@mui/icons-material/Cable';
import { Card, Grid, Typography } from '@mui/material'
import { motion } from 'framer-motion';
import "./About.css"

function AboutPage() {

  const fadeAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: "tween",
        delay: 0.2
      }
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

  return (
    <div className='aboutus-page'>
      <div className='pageHeader'>
        <Grid container spacing={0} justifyContent="center" alignItems="center">
          <Grid xs={11} lg={12} display="flex" justifyContent="center">
            <Typography sx={{ typography: { xs: 'h6', lg: 'h3', margin: "140px auto 30px auto" } }} className='page-title heading'
              component={motion.div}
              variants={fadeAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              ABOUT MASA</Typography>
          </Grid>
          <Grid xs={11} lg={12} display="flex" justifyContent="center">
            <Typography sx={{ typography: { xs: 'h6' } }} className='page-title'
              component={motion.div}
              variants={fadeAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              About MASA content</Typography>
          </Grid>
        </Grid>
      </div>
      <div style={{ width: "96%", margin: "20px auto"}}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Grid container spacing={0} justifyContent="space-around" alignItems="center">
            <Grid xs={12} display="flex" justifyContent="center">
              <Typography sx={{ typography: { xs: 'h6', md: 'h4' } }} className='card-title'
                component={motion.div}
                variants={slideRightAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                OUR CURRENT TEAMS</Typography>
            </Grid>
            <Grid xs={12} display="flex" justifyContent="center">
            </Grid>
          </Grid>
          <Grid container spacing={0} justifyContent="space-around" alignItems="center">
            <Grid xs={12} lg={6} display="flex" justifyContent="center">
              <Card className='team-card' sx={{ padding: "20px 0px", margin: "20px auto", width: "70%" }}
                component={motion.div}
                variants={slideRightAnimation}
                initial="hidden"
                whileInView="visible"
              // whileHover={{ scale: 1.02 }}
              >
                <Grid container spacing={0} justifyContent="space-around">
                  <Grid xs={12} display="flex" justifyContent="center">
                    <CableIcon className='card-icon' />
                  </Grid>
                  <Grid xs={12} display="flex" justifyContent="center">
                    <Typography sx={{ typography: { xs: 'h6', lg: 'p' } }} className='card-title'
                      component={motion.div}
                      variants={slideRightAnimation}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      LEADERSHIP</Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid xs={12} lg={6} display="flex" justifyContent="center">
              <Card className='team-card' sx={{ padding: "20px 0px", margin: "20px auto", width: "70%" }}
                component={motion.div}
                variants={slideRightAnimation}
                initial="hidden"
                whileInView="visible"
              // whileHover={{ scale: 1.02 }}
              >
                <Grid container spacing={0} justifyContent="center">
                  <Grid xs={12} display="flex" justifyContent="center">
                    <CableIcon className='card-icon' />
                  </Grid>
                  <Grid xs={12} display="flex" justifyContent="center">
                    <Typography sx={{ typography: { xs: 'h6', lg: 'p' } }} className='card-title'
                      component={motion.div}
                      variants={slideRightAnimation}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      PROJECT MANAGEMENT</Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid xs={12} lg={6} display="flex" justifyContent="center">
              <Card className='team-card' sx={{ padding: "20px 0px", margin: "20px auto", width: "70%" }}
                component={motion.div}
                variants={slideRightAnimation}
                initial="hidden"
                whileInView="visible"
              // whileHover={{ scale: 1.02 }}
              >
                <Grid container spacing={0} justifyContent="space-around">
                  <Grid xs={12} display="flex" justifyContent="center">
                    <CableIcon className='card-icon' />
                  </Grid>
                  <Grid xs={12} display="flex" justifyContent="center">
                    <Typography sx={{ typography: { xs: 'h6', lg: 'p' } }} className='card-title'
                      component={motion.div}
                      variants={slideRightAnimation}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      ELECTRICAL</Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid xs={12} lg={6} display="flex" justifyContent="center">
              <Card className='team-card' sx={{ padding: "20px 0px", margin: "20px auto", width: "70%" }}
                component={motion.div}
                variants={slideRightAnimation}
                initial="hidden"
                whileInView="visible"
              // whileHover={{ scale: 1.02 }}
              >
                <Grid container spacing={0} justifyContent="space-around">
                  <Grid xs={12} display="flex" justifyContent="center">
                    <CableIcon className='card-icon' />
                  </Grid>
                  <Grid xs={12} display="flex" justifyContent="center">
                    <Typography sx={{ typography: { xs: 'h6', lg: 'p' } }} className='card-title'
                      component={motion.div}
                      variants={slideRightAnimation}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      ELECTRICAL</Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutPage
