import React from 'react'
import "./Home.css"
import { Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material'

function HomePage() {
  return (
    <div>
      <div className='main-img'>
        <Grid container spacing={0} justifyContent="center">
          <Grid xs={12} display="flex" justifyContent="center" className='main-icon-grid'>
            <img src='icons/shuttle-space-solid.gif' width={100} />
          </Grid>
        </Grid>
        <Grid container spacing={0} justifyContent="center">
          <Grid xs={12} display="flex" justifyContent="center">
            <Typography variant='h4' color="white" className='main-title'>REACHING FOR THE STARS...</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={0} justifyContent="center">
          <Grid xs={12} display="flex" justifyContent="center">
            <Button
              size="large"
              edge="start"
              className='launch-btn'
            >
              <img src='icons/launch-button.gif' width={30} /> LAUNCH
            </Button>
          </Grid>
        </Grid>
      </div>
      <div className='sponsers-content'>
        <Grid container spacing={0} justifyContent="flex-start">
          <Grid xs={12} display="flex" justifyContent="center">
            <Typography variant='h4'>OUR SPONSERS</Typography>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={0} justifyContent="center">
          <Grid xs={12} display="flex" justifyContent="center">
            <Card className='sponsers-card' sx={{ width: "95vw", position: 'relative' }}>
              <CardMedia
                sx={{ height: 330 }}
                image="sponsers-bg.jpeg"
                title="green iguana"
              />
              <div>
                <Grid container spacing={0} justifyContent="flex-start" style={{ position: 'absolute', top: 30 }}>
                  <Grid xs={4} display="flex" justifyContent="center">
                    <img src='ford.png' width={200} />
                  </Grid>
                  <Grid xs={4} display="flex" justifyContent="center">
                    <img src='umichcecs.png' width={200} />
                  </Grid>
                  <Grid xs={4} display="flex" justifyContent="center">
                    <img src='bssolidworks.png' width={300} height={80} />
                  </Grid>
                </Grid>
                <Grid container spacing={0} justifyContent="flex-start" style={{ position: 'absolute', top: 200 }}>
                  <Grid xs={4} display="flex" justifyContent="center">
                    <img src='patriot-tool.png' width={200} />
                  </Grid>
                  <Grid xs={4} display="flex" justifyContent="center">
                    <img src='ansys.png' width={300} height={90} />
                  </Grid>
                  <Grid xs={4} display="flex" justifyContent="center">
                    <img src='hugnes.png' width={250} height={80} />
                  </Grid>
                </Grid>
              </div>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default HomePage
