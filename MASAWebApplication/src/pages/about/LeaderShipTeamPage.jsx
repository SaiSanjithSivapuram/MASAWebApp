import React from 'react'
import { Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Icon, Typography } from '@mui/material'
import { motion } from 'framer-motion';
import "./About.css"

function LeadershipTeamPage() {

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
            <Grid xs={12} lg={3} display="flex" justifyContent="center">
              <Card className='team-card' sx={{ padding: "20px 0px", margin: "20px auto", width: "60%" }}
              component={motion.div}
              variants={slideRightAnimation}
              initial="hidden"
              whileInView="visible"
              // whileHover={{ scale: 1.02 }}
              >
                <Grid container spacing={0} justifyContent="space-around">
                  <Grid xs={12} display="flex" justifyContent="center">
                    <img src='/team-members/Andrea.png' className='team-image' />
                  </Grid>
                  <Grid xs={12} display="flex" justifyContent="center">
                    <Typography sx={{ typography: { xs: 'h6' } }} className='card-title'
                      component={motion.div}
                      variants={slideRightAnimation}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      ANDREA</Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid xs={12} lg={6} display="flex" justifyContent="center">
              <Typography sx={{ typography: { md: 'p', xs: 'p' } }} className='intro-description'
                component={motion.div}
                variants={slideLeftAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Content For Andrea.</Typography>
            </Grid>
          </Grid>
        </motion.div>
      </div>
    </div>
  )
}

export default LeadershipTeamPage;
