import React from 'react'
import BoltIcon from '@mui/icons-material/Bolt';
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
                            <BoltIcon sx={{ typography: { xs: 'h6', lg: 'h3', margin: "140px 10px 30px auto" } }} className='page-title'
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
                        <Grid xs={11} lg={12} display="flex" justifyContent="center">
                            <Typography sx={{ typography: { xs: 'h6' } }} className='page-title'
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
        </div>
    )
}

export default ElectricalTeam
