import React from 'react';
import CableIcon from '@mui/icons-material/Cable';
import { Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Icon, Typography } from '@mui/material'
import { motion } from 'framer-motion';
import "./About.css"

function AboutPage() {

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
      <div>
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
                ABOUT MASA</Typography>
            </Grid>
            <Grid xs={12} display="flex" justifyContent="center">
            </Grid>
          </Grid>
          <Grid container spacing={0} justifyContent="space-around" alignItems="center">
            <Grid xs={12} lg={3} display="flex" justifyContent="center">
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
                    <Typography sx={{ typography: { xs: 'h6', lg: 'h5' } }} className='card-title'
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
            <Grid xs={12} lg={3} display="flex" justifyContent="center">
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
                    <Typography sx={{ typography: { xs: 'h6', lg: 'h5' } }} className='card-title'
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
            <Grid xs={12} lg={3} display="flex" justifyContent="center">
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
                    <Typography sx={{ typography: { xs: 'h6', lg: 'h5' } }} className='card-title'
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
            <Grid xs={12} lg={3} display="flex" justifyContent="center">
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
                    <Typography sx={{ typography: { xs: 'h6', lg: 'h5' } }} className='card-title'
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
