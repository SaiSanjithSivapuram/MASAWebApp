import React from 'react'
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import { TeamsData } from '../../data/TeamsData';
import { motion } from 'framer-motion';
import "./teams.css";

function MechanicalTeam({ team }) {
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
                            <PrecisionManufacturingIcon sx={{ typography: { xs: 'h6', md: 'h3', lg: 'h3' }, margin: "30px 0px" }} className='page-title'
                            />
                            <Typography sx={{ typography: { xs: 'h6', md: 'h4', lg: 'h4' }, margin: "30px 0px" }} className='page-title heading'
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
                                    component={motion.div}
                                    variants={fadeAnimation}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variant='p'
                                    fontSize={"18px"}
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
                <Grid container spacing={0} display="flex" justifyContent="center">
                    <Card className="projectDetailCard" sx={{ margin: "20px auto", width: "92%" }}
                        component={motion.div}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <CardHeader className='projectDetailCardTitle' title={
                            <Grid container spacing={0} display="flex" justifyContent="center">
                                <Grid xs={12} md={11.45} lg={11.45} display="flex" justifyContent={{ xs: "center", md: "flex-start", lg: "flex-start" }}>
                                    <Typography variant="h5" component="div" className='teamCardTitle'>
                                        PAYLOAD
                                    </Typography>
                                </Grid>
                            </Grid>
                        } />
                        <CardContent>
                            <Grid container spacing={0} display="flex" justifyContent="center">
                                <Grid xs={12} display="flex" justifyContent="flex-start">
                                    <Typography variant="body1" component="div" className='teamCardDescription'>
                                        On the mechanical side this team will handle creating the bulkheads of the payload that electrical will populate. Payload’s main concern is the payload frame and board mounts. Previous years frames and mounts have housed projects that include strain gauges, chemical valve testing, and an electrical gyroscopic data collection. On this team you will learn important design and manufacturing principles, such as load analysis, material analysis, and CAD assembleming to name a few.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid container spacing={0} display="flex" justifyContent="center">
                    <Card className="projectDetailCard" sx={{ margin: "20px auto", width: "92%" }}
                        component={motion.div}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <CardHeader className='projectDetailCardTitle' title={
                            <Grid container spacing={0} display="flex" justifyContent="center">
                                <Grid xs={12} md={11.45} lg={11.45} display="flex" justifyContent={{ xs: "center", md: "flex-start", lg: "flex-start" }}>
                                    <Typography variant="h5" component="div" className='teamCardTitle'>
                                        RECOVERY
                                    </Typography>
                                </Grid>
                            </Grid>
                        } />
                        <CardContent>
                            <Grid container spacing={0} display="flex" justifyContent="center">
                                <Grid xs={12} display="flex" justifyContent="flex-start">
                                    <Typography variant="body1" component="div" className='teamCardDescription'>
                                        This team's main concern is to be able to recover a pristine rocket once it has landed. Mechanical recovery projects typically include designing, analyzing, and manufacturing the parachutes and avionics bays. On this team you will learn the mechanics of parachutes, shock cords, and ejection charges. Gained skills include sewing, CAD modeling, gord analysis, and mass balance
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid container spacing={0} display="flex" justifyContent="center">
                    <Card className="projectDetailCard" sx={{ margin: "20px auto", width: "92%" }}
                        component={motion.div}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <CardHeader className='projectDetailCardTitle' title={
                            <Grid container spacing={0} display="flex" justifyContent="center">
                                <Grid xs={12} md={11.45} lg={11.45} display="flex" justifyContent={{ xs: "center", md: "flex-start", lg: "flex-start" }}>
                                    <Typography variant="h5" component="div" className='teamCardTitle'>
                                        AIRFRAME AND PROPULSION
                                    </Typography>
                                </Grid>
                            </Grid>
                        } />
                        <CardContent>
                            <Grid container spacing={0} display="flex" justifyContent="center">
                                <Grid xs={12} display="flex" justifyContent="flex-start">
                                    <Typography variant="body1" component="div" className='teamCardDescription'>
                                        This team will work alongside all subgroups, both mechanical and electrical, to house everything. They also have their own team projects, such as the air brakes, fins, and camera shrouds. This team is a vital necessity to the success of the team. Skills that are used daily on this team are Solidworks and Openrocket modeling, milling, composite manufacturing, and CFD analysis.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </div>
        </div>
    )
}

export default MechanicalTeam
