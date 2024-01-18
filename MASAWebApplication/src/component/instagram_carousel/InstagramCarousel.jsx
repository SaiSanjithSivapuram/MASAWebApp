import React, { lazy } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Card, CardHeader, Grid, Typography } from '@mui/material'
import { motion } from 'framer-motion';
import "./InstagramCarousel.css";
const Carousel = lazy(() => import('react-material-ui-carousel'));

function InstagramCarousel({ items }) {


    const fadeAnimation = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                type: "tween",
                delay: 0.4
            }
        }
    }

    return (
        <div>
            <Card sx={{ width: "92vw", height:"80vh" }}
                component={motion.div}
                variants={fadeAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className='social-media-card'
            >
                <CardHeader title={
                    <Grid container spacing={0} justifyContent="center">
                        <Grid xs={2} lg={1} display="flex" justifyContent="space-between">
                            <InstagramIcon />
                            <LinkedInIcon />
                        </Grid>
                    </Grid>}
                />
                <Carousel
                    animation='slide'
                    indicators={false}
                >
                    {
                        items.map((item, i) => {
                            return (
                                <a href={item.url} key={i} target='blank' className='instagram-card-content'>
                                    <Grid container spacing={0} justifyContent="center">
                                        <Grid xs={11} sx={{ display: {xs: "block", md: "none", lg: "none"} }} display="flex" justifyContent="center">
                                            <div className='social-image'>
                                                <img src={item.imageUrl} width={"100%"} height={"auto"} style={{ borderRadius: "20px" }} />
                                            </div>
                                        </Grid>
                                        <Grid md={8} sx={{ display: {xs: "none", md: "block", lg: "none"} }} display="flex" justifyContent="center">
                                            <div className='social-image'>
                                                <img src={item.imageUrl} width={"100%"} height={"auto"} style={{ borderRadius: "20px"}} />
                                            </div>
                                        </Grid>
                                        <Grid lg={5} sx={{ display: {xs: "none", md: "none", lg: "block"} }} display="flex" justifyContent="center">
                                            <div className='social-image'>
                                                <img src={item.imageUrl} width={"80%"} height={"auto"} style={{ borderRadius: "20px"}} />
                                            </div>
                                        </Grid>
                                        <Grid xs={12} sx={{ display: {xs: "block", md: "block", lg: "none"} }} display="flex" justifyContent="center">
                                            <div className='social-content'>
                                                <Typography key={i} sx={{ display: "flex", alignItems: "center", margin: "10px 0px" }}><FavoriteIcon sx={{ marginRight: "6px" }} /> {item.likes}</Typography>
                                                <Typography key={i} >{item.postText.slice(0,100) + "..."}</Typography>
                                            </div>
                                        </Grid>
                                         <Grid lg={5} sx={{ display: {xs: "none", md: "none", lg: "block"} }} display="flex" justifyContent="center">
                                            <div className='social-content'>
                                                <Typography key={i} sx={{ display: "flex", alignItems: "center", margin: "10px 0px" }}><FavoriteIcon sx={{ marginRight: "6px" }} /> {item.likes}</Typography>
                                                <Typography key={i} >{item.postText}</Typography>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </a>
                            )
                        })
                    }
                </Carousel>
            </Card>
        </div>
    )
}

export default InstagramCarousel
