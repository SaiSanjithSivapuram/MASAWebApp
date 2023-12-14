import React from 'react'
import { Divider, Grid, IconButton, Typography, Button } from '@mui/material'
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import InfoIcon from '@mui/icons-material/Info';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Groups2Icon from '@mui/icons-material/Groups2';
import { TeamsData } from '../../data/TeamsData';
import "./Teams.css"

function LeadershipTeamPage({ team }) {

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
        <motion.div
          variants={fadeAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={0} justifyContent="center" alignItems="center">
            <Grid xs={11} lg={12} display="flex" justifyContent="center" alignItems={'center'}>
              <Groups2Icon sx={{ typography: { xs: 'h6', lg: 'h3', margin: "140px 10px 30px auto" } }} className='page-title'
              />
              <Typography sx={{ typography: { xs: 'h6', lg: 'h3', margin: "140px auto 30px 10px" } }} className='page-title heading'
                component={motion.div}
                variants={fadeAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {TeamsData[team].organization.toUpperCase()}</Typography>
            </Grid>
            <Grid xs={9} display="flex" justifyContent="center">
              <Typography sx={{ typography: 'p' }} className='page-title'
                component={motion.div}
                variants={fadeAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {TeamsData[team].description}</Typography>
            </Grid>
          </Grid>
        </motion.div>
      </div>
      <div style={{ width: "96%", margin: "0px auto" }}>
        {TeamsData[team].team.map((member, index) => {
          return (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                key={index}
              >
                <Grid container spacing={0} justifyContent="space-around" alignItems="center">
                  <Grid xs={11} lg={3} display="flex" justifyContent={{ xs: "center", lg: "flex-end" }}>
                    <motion.div
                      style={{ padding: "20px 0px", margin: "20px auto", display: "flex", justifyContent: "center" }}
                      variants={slideRightAnimation}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <img src={`/team-members/${member.name}.png`} className='team-image' />
                    </motion.div>
                  </Grid>
                  <Grid xs={10} lg={5} display="flex-col" justifyContent={{ xs: "center", lg: "flex-end" }}>
                    <Grid xs={12} lg={12} display="flex" justifyContent={{ xs: "center", lg: "flex-start" }}>
                      <Typography sx={{ typography: { xs: 'h6' } }} className='card-title'
                        component={motion.div}
                        variants={slideLeftAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        {member.name.toUpperCase()}</Typography>
                    </Grid>
                    <Grid xs={12} lg={12} display="flex" justifyContent={{ xs: "center", lg: "flex-start" }}>
                      <Typography sx={{ typography: { xs: 'p' }, marginBotton: "10px" }} className='card-title'
                        component={motion.div}
                        variants={slideLeftAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        {member.organization.toUpperCase()} TEAM</Typography>
                    </Grid>
                    <Grid xs={12} lg={12} display="flex" justifyContent={{ xs: "center", lg: "flex-start" }}>
                      <Typography sx={{ typography: { md: 'p', xs: 'p' } }} className='intro-description'
                        component={motion.div}
                        variants={slideLeftAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        {member.description}</Typography>
                    </Grid>
                    <Grid xs={12} lg={12} display="flex" justifyContent={{ xs: "center", lg: "space-around" }} sx={{ margin: "20px auto" }}>
                      <Grid xs={4} display="flex" justifyContent="center">
                        <IconButton className='contactIcon'
                          component={motion.a}
                          variants={slideLeftAnimation}
                          initial="hidden"
                          whileInView="visible"
                          whileHover={{
                            scale: 1.15,
                            transition: { duration: 0.3 },
                          }}
                          viewport={{ once: true }}
                          href={`mailto:${member.email}`}
                          target='blank'
                        >
                          <EmailIcon />
                        </IconButton>
                      </Grid>
                      <Grid xs={4} display="flex" justifyContent="center">
                        <IconButton className='contactIcon'
                          component={motion.a}
                          variants={slideLeftAnimation}
                          initial="hidden"
                          whileInView="visible"
                          whileHover={{
                            scale: 1.15,
                            transition: { duration: 0.3 },
                          }}
                          viewport={{ once: true }}
                          href={member.linkedin}
                          target='blank'
                        >
                          <LinkedInIcon />
                        </IconButton>
                      </Grid>
                      {member.url != '/aboutus/leadership-team' && <Grid xs={4} display="flex" justifyContent="center">
                        <IconButton className='contactIcon'
                          component={motion.a}
                          variants={slideLeftAnimation}
                          initial="hidden"
                          whileInView="visible"
                          whileHover={{
                            scale: 1.15,
                            transition: { duration: 0.3 },
                          }}
                          viewport={{ once: true }}
                          href={member.url}
                        >
                          <InfoIcon />
                        </IconButton>
                      </Grid>}
                    </Grid>
                  </Grid>
                </Grid>
              </motion.div>
              <Divider />
            </>
          )
        })}
      </div>
    </div>
  )
}

export default LeadershipTeamPage; 