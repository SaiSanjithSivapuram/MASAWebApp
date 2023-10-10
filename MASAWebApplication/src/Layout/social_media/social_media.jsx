import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material'

import { CardActionArea } from '@mui/material';


export default function QuiltedImageList() {
  return (
    <div>
        <Grid container spacing={0} justifyContent="flex-start">
          <Grid xs={12} display="flex" justifyContent="center">
            <Typography variant='h4'>OUR SOCIALS</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}
        sx={{ 
            width: '100%',
            height: '100%',
            display: 'flex',
            m: 5,
            justifyContent: 'space-evenly',
            alignitems:"stretch"}}
        >
        {itemData.map((item) => (

            <Grid item xs={item.xs}>
                <Card sx={{ maxWidth: 280 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="250"
                        image = {item.img}
                        alt={item.title}
                        />
                        <CardContent>
                        {item.title
                            ?  <Typography gutterBottom variant="h5" component="div">
                                    {item.title}
                                </Typography>
                            : <div height='0' width='0'></div>
                        }

                        {item.text
                            ?  <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            : <></>
                        }
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>

        ))}
        </Grid>
    </div>
    
  );
}

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      text: `Lizards are a widespread group of squamate reptiles, with over 6,000
      species, ranging across all continents except Antarctica`,
      xs: 2
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      xs: 6
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      text: `Lizards are a widespread group of squamate reptiles, with over 6,000
      species, ranging across all continents except Antarctica`,
      xs: 4
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      text: `Lizards are a widespread group of squamate reptiles, with over 6,000
      species, ranging across all continents except Antarctica`,
      xs: 6
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      text: `Lizards are a widespread group of squamate reptiles, with over 6,000
      species, ranging across all continents except Antarctica`,
      xs: 6
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        text: `Lizards are a widespread group of squamate reptiles, with over 6,000
      species, ranging across all continents except Antarctica`,
        xs: 2
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
        xs: 2
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
        xs: 2
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        text: `Lizards are a widespread group of squamate reptiles, with over 6,000
      species, ranging across all continents except Antarctica`,
        xs: 6
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
        xs: 5
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
        text: `Lizards are a widespread group of squamate reptiles, with over 6,000
      species, ranging across all continents except Antarctica`,
        xs: 5
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        xs: 2
    },
  ];