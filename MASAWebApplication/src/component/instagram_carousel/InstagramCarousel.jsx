import React, { lazy } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { SocialMediaData } from '../../data/SocialMediaData';
import { Card, CardHeader, Grid, Typography } from '@mui/material'
import { motion } from 'framer-motion';
import "./InstagramCarousel.css";
import { useNavigate } from 'react-router';
const Carousel = lazy(() => import('react-material-ui-carousel'));

function InstagramCarousel({ items }) {

    const navigate = useNavigate();

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
            <Card sx={{ width: { xs: "90vw", lg: "26vw" }, height: { xs: "400px", lg: "700px" } }}
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
                            <InstagramIcon />
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
                                <a href={item.url} target='blank' className='instagram-card-content'>
                                    <div className='social-image'>
                                        <img src={item.imageUrl} width={"100%"} height={"auto"} />
                                    </div>
                                    <div className='social-content'>
                                        <Typography key={i} sx={{ display: "flex", alignItems: "center", margin: "10px 0px" }}><FavoriteIcon sx={{ marginRight: "6px" }} /> {item.likes}</Typography>
                                        <Typography key={i} >{item.postText.slice(0, 300) + "..."}</Typography>
                                    </div>
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
