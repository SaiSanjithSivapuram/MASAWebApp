import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { HomeOutlined } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import "./ComingSoon.css";

function ComingSoon() {
    const navigate = useNavigate();

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
        <div className='error-content'>
            <Grid container spacing={0} justifyContent="center">
                <Grid xs={12} display="flex" justifyContent="center">
                    <Typography sx={{ typography: { xs: "h4", md: "h2", lg: "h1" }, marginRight: "10px" }} className='title2'
                        component={motion.div}
                        variants={fadeAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        COMING</Typography>
                    <Typography sx={{ typography: { xs: "h4", md: "h2", lg: "h1" } }} className='title1'
                        component={motion.div}
                        variants={fadeAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        SOON</Typography>
                </Grid>
                <Grid xs={12} display="flex" justifyContent="center">
                    <Button
                        edge="start"
                        className='page-btn'
                        startIcon={<HomeOutlined />}
                        variant='outlined'
                        component={motion.a}
                        variants={fadeAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{
                            scale: 1.15,
                            transition: { duration: 0.3 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => navigate('/')}
                    >
                        <Typography variant='p' className='title1'
                            component={motion.div}
                            variants={fadeAnimation}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            Back To Home</Typography>
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default ComingSoon
