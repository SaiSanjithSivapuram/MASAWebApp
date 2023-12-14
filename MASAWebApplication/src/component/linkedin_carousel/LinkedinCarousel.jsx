import React, { lazy } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { SocialMediaData } from '../../data/SocialMediaData';
import { Card, CardHeader, Grid, Typography } from '@mui/material'
import { motion } from 'framer-motion';
import "./LinkedinCarousel.css";
const Carousel = lazy(() => import('react-material-ui-carousel'));

function LinkedinCarousel() {

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
            <Card sx={{ width: { xs: "90vw", lg: "26vw" }, height: "700px" }}
                component={motion.div}
                variants={fadeAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className='social-media-card'
            >
                <CardHeader title={
                    <Grid container spacing={0} justifyContent="flex-start">
                        <Grid xs={12} display="flex" justifyContent="center">
                            <LinkedInIcon />
                        </Grid>
                    </Grid>}
                />
                {/* <CardContent> */}
                <Carousel
                    animation='slide'
                    indicators={false}
                >
                    {
                        SocialMediaData['linkedin'].map((item, i) => {
                            return (
                                <a href={item.url} target='blank' className='linkedin-card-content'>
                                    <div className='social-image'>
                                        <img src={item.imageUrl} width={"100%"} height={"auto"} />
                                    </div>
                                    <div className='social-content'>
                                        <Typography key={i} sx={{ display: "flex", alignItems: "center", margin: "10px 0px" }}><FavoriteIcon sx={{ marginRight: "6px" }} /> {item.likes}</Typography>
                                        <Typography key={i} >{item.postText}</Typography>
                                    </div>
                                </a>
                            )
                        })
                    }
                </Carousel>
                {/* </CardContent> */}
            </Card>
        </div>
    )
}

export default LinkedinCarousel
