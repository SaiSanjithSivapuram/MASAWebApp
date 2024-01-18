import React from 'react'
import BoltIcon from '@mui/icons-material/Bolt';
import RecyclingIcon from '@mui/icons-material/Recycling';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import InfoIcon from '@mui/icons-material/Info';
import { Grid, Typography } from '@mui/material';
import { TeamsData } from '../../data/TeamsData';
import { motion } from 'framer-motion';
import "./teams.css";

function ElectricalTeam({ team }) {
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
        <div>
            <div className='pageHeader'>
                <motion.div
                    variants={fadeAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Grid container spacing={0} justifyContent="center" alignItems="center">
                        <Grid xs={11} lg={12} display="flex" justifyContent="center" alignItems='center'>
                            <BoltIcon sx={{ typography: { xs: 'h6', md: 'h3', lg: 'h3' }, margin: "30px 0px" }} className='page-title'
                            />
                            <Typography sx={{ typography: { xs: 'p', md: 'h4', lg: 'h4' }, margin: "30px 0px" }} className='page-title heading'
                                component={motion.div}
                                variants={fadeAnimation}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {TeamsData[team].organization.toUpperCase()}</Typography>
                        </Grid>
                        <Grid container spacing={0} justifyContent={{ xs: "center", lg: "space-around" }} alignItems="center">
                            <Grid xs={10} lg={6} display="flex-col" justifyContent="center">
                                <motion.div
                                    variants={fadeAnimation}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <Typography sx={{ typography: 'p', fontSize: '18px', display: "flex", justifyContent: { xs: "center", lg: "flex-start" }, alignItems: "center", marginBottom: "10px" }} className='page-title heading'
                                        component={motion.div}
                                        variants={fadeAnimation}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >
                                        {TeamsData[team].fullName.toUpperCase()}</Typography>
                                </motion.div>
                                <Typography className='page-title description'
                                    sx={{ marginBottom: {xs: "30px"}, fontSize: '18px' }}
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
            <div>
                <Grid container spacing={0} justifyContent="space-around" alignItems="center" className='pageContent'>
                    <Grid xs={12} md={11} lg={3} display="flex" justifyContent="center" alignItems='center'>
                        <motion.div
                            variants={slideRightAnimation}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <InfoIcon className='icon' />
                        </motion.div>
                    </Grid>
                    <Grid xs={10} md={11} lg={7} display="flex" justifyContent="center" alignItems='center'>
                        <Typography sx={{ typography: 'p', fontSize: "18px" }}
                            component={motion.div}
                            variants={slideLeftAnimation}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            This team on the electrical side will handle populating the bulkheads of the payload that mechanical will design. This teams main concern is the payload experimental project. previous years projects include strain guages, chemcial valve testing, and a electrical gyroscopic data collection. On this team you will learn important hardware and software principals, such as embedded coding, sensor tradeoff analysis, and pcb design to name a few.</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={0} justifyContent="space-around" alignItems="center" className='pageContent'>
                    <Grid xs={12} sx={{ display: { xs: "block", md: "block", lg: "none" } }} display="flex" justifyContent="center" alignItems='center'>
                        <motion.div
                            variants={slideRightAnimation}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <DeveloperBoardIcon className='icon' />
                        </motion.div>
                    </Grid>
                    <Grid xs={10} md={11} lg={7} display="flex" justifyContent="center" alignItems='center'>
                        <Typography sx={{ typography: 'p', fontSize: "18px" }}
                            component={motion.div}
                            variants={slideRightAnimation}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            This teams main concern to record the altitude of the rocket to dictate when seperation will occur and to locate the rocket once it has landed. electrical recovery projects typically include working with altimeters and GPS systems. On this team you will learn how to work with hardware by understanding what battery sizes to use, how long it will last for, establishing connections with GPS systems.</Typography>
                    </Grid>
                    <Grid xs={12} lg={3} sx={{ display: { xs: "none", md: "none", lg: "block" } }} display="flex" justifyContent="center" alignItems='center'>
                        <motion.div
                            variants={slideLeftAnimation}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <DeveloperBoardIcon className='icon' />
                        </motion.div>
                    </Grid>
                </Grid>
                <Grid container spacing={0} justifyContent="space-around" alignItems="center" className='pageContent'>
                    <Grid xs={12} lg={3} display="flex" justifyContent="center" alignItems='center'>
                        <motion.div
                            variants={slideRightAnimation}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <RecyclingIcon className='icon' />
                        </motion.div>
                    </Grid>
                    <Grid xs={10} md={11} lg={7} display="flex" justifyContent="center" alignItems='center'>
                        <Typography sx={{ typography: 'p', fontSize: "18px" }}
                            component={motion.div}
                            variants={slideLeftAnimation}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            This team will work alongside all subgroups under electrical that require software as well as having their own team projects. This team is a vital nessecity to the success of the electrical team. skills that are used on the daily on this team are C, embedded programming language, and a simple understanding of code design.</Typography>
                    </Grid>
                </Grid>
            </div>
        </div >
    )
}

export default ElectricalTeam
