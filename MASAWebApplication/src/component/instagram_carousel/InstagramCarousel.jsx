import React, { lazy } from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import { motion } from 'framer-motion';
import "./InstagramCarousel.css";
const Carousel = lazy(() => import('react-material-ui-carousel'));

function InstagramCarousel() {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <div>
            <Card sx={{ padding: "20px 0px", margin: "20px auto", width: {xs: "90vw", lg: "26vw" }, height: "auto" }}
                component={motion.div}
                whileHover={{ scale: 1.02 }}
                className='social-media-card'
            >
                <CardContent>
                    <Carousel
                        animation='slide'
                    >
                        {
                            items.map((item, i) => {
                                return (
                                    <>
                                        <Typography key={i} >{item.name}</Typography>
                                        <Typography key={i} >{item.description}</Typography>
                                    </>
                                )
                            })
                        }
                    </Carousel>
                </CardContent>
            </Card>
        </div>
    )
}

export default InstagramCarousel
