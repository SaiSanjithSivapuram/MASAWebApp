import React, { lazy } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import { motion } from 'framer-motion';
import "./LinkedinCarousel.css";
const Carousel = lazy(() => import('react-material-ui-carousel'));

function LinkedinCarousel() {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image: "/MASAMainBg.jpeg"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image: "/MASAMainBg.jpeg"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image: "/MASAMainBg.jpeg"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image: "/MASAMainBg.jpeg"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image: "/MASAMainBg.jpeg"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image: "/MASAMainBg.jpeg"
        }
    ]

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
            <Card sx={{ width: { xs: "90vw", lg: "26vw" }, height: "auto" }}
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
                >
                    {
                        items.map((item, i) => {
                            return (
                                <>
                                    <div className='social-image'>
                                        <img src={item.image} width={"100%"} height={"auto"} />
                                    </div>
                                    <div className='social-content'>
                                        <Typography key={i} >{item.name}</Typography>
                                        <Typography key={i} >{item.description}</Typography>
                                    </div>
                                </>
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
