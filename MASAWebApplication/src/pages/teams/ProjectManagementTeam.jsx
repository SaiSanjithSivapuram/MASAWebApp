import React from 'react'
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { Grid, Typography } from '@mui/material';
import { TeamsData } from '../../data/TeamsData';
import { motion } from 'framer-motion';
import "./teams.css";

function ProjectManagementTeam({ team }) {
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

    return (
        <div>
            <div className='pageHeader'>
                <motion.div
                    variants={fadeAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Grid container spacing={0} justifyContent="center" alignItems="center">
                        <Grid xs={11} lg={12} display="flex" justifyContent="center" alignItems={'center'}>
                            <AccountTreeIcon sx={{ typography: { xs: 'h6', md: "h3", lg: 'h3' }, margin: "30px 0px" }} className='page-title'
                            />
                            <Typography sx={{ typography: { xs: 'h6', md: "h4", lg: 'h4' }, margin: "30px 0px" }} className='page-title heading'
                                component={motion.div}
                                variants={fadeAnimation}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {TeamsData[team].organization.toUpperCase()}</Typography>
                        </Grid>
                        <Grid container spacing={0} justifyContent={{ xs: "center", lg: "space-around" }} alignItems="center">
                            <Grid xs={11} lg={6} display="flex-col" justifyContent="center">
                                <motion.div
                                    variants={fadeAnimation}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <Typography sx={{ typography: 'p', display: "flex", justifyContent: {xs: "center", lg: "flex-start"}, alignItems: "center", marginBotton: "10px" }} className='page-title heading'
                                        component={motion.div}
                                        variants={fadeAnimation}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >
                                        {TeamsData[team].fullName.toUpperCase()}</Typography>
                                </motion.div>
                                <Typography className='page-title description'
                                    component={motion.div}
                                    variants={fadeAnimation}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variant='p'
                                >
                                    {TeamsData[team].description}</Typography>
                            </Grid>
                            <Grid xs={11} lg={4} display="flex-col" justifyContent="center">
                                <motion.div
                                    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                                    variants={fadeAnimation}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <img src={`/team-members/${TeamsData[team].leadName}.jpeg`} className='team-header-image' />
                                </motion.div>
                            </Grid>
                        </Grid>
                    </Grid>
                </motion.div>
            </div>
        </div>
    )
}

export default ProjectManagementTeam
