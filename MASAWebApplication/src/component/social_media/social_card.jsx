import React from 'react'
import { Card, CardMedia, CardContent, CardActionArea, Typography } from '@mui/material';

function SocialCard({ items }) {
  return (
        <Card>
            <CardActionArea>
            <CardMedia
                component="img"
                height="100%"
                image={items.img}
                alt={items.title}
            />
            <CardContent>
                {items.title
                ? <Typography gutterBottom variant="h5" component="div">
                    {items.title}
                </Typography>
                : <div height='0' width='0'></div>
                }
                {items.text
                ? <Typography variant="body2" color="text.secondary">
                    {items.text}
                  </Typography>
                : <></>
                }
            </CardContent>
            </CardActionArea>
        </Card>
  )
}

export default SocialCard
