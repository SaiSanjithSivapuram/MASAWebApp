import React from 'react'
import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Icon, Typography } from '@mui/material'
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import DescriptionIcon from '@mui/icons-material/Description';
import SocialMedia from '../../component/social_media/social_media';
import "./Home.css"

function HomePage() {
  const mainTeam = [
    {
      name: "Andrey",
      organization: "Electirc",
      description: "I am Andrea. I am currently the Electrical Team Lead handling the circuit functionality of rockets."
    },
    {
      name: "Bruna",
      organization: "Electirc",
      description: "I am Andrea. I am currently the Electrical Team Lead handling the circuit functionality of rockets."
    },
    {
      name: "Andrea",
      organization: "Electirc",
      description: "I am Andrea. I am currently the Electrical Team Lead handling the circuit functionality of rockets."
    },
    {
      name: "Andrea",
      organization: "Electirc",
      description: "I am Andrea. I am currently the Electrical Team Lead handling the circuit functionality of rockets."
    }
  ]
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
              <CardActionArea>
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
                      <img src='hugnes.png' width={300} height={90} />
                    </Grid>
                    <Grid xs={4} display="flex" justifyContent="center">
                      <img src='ansys.png' width={250} height={80} />
                    </Grid>
                  </Grid>
                </div>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
      <div className='core-team-content'>
        <Card className='core-team-bg'>
          <Grid container spacing={0} justifyContent="center">
            {mainTeam.map((member, index) => {
              return (
                <Grid xs={3} display="flex" justifyContent="center">
                  <Card sx={{ width: 300, position: "relative" }} className='core-team-card'>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="290"
                        image={`team-members/${member.name}.png`}
                        alt="green iguana"

                      />
                      <CardContent>
                        <Grid container spacing={0} justifyContent="center" style={{ position: 'absolute', bottom: 170 }}>
                          <Grid xs={12} display="flex" justifyContent="flex-start">
                            <Typography variant="h5" component="div" color="white">
                              {member.name.toUpperCase()}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid container spacing={0} justifyContent="center">
                          <Grid xs={1.5} display="flex" justifyContent="flex-start">
                            <Icon>
                              <CorporateFareIcon />
                            </Icon>
                          </Grid>
                          <Grid xs={10.5} display="flex" justifyContent="flex-start">
                            <Typography gutterBottom variant="body1">
                              {member.organization.toUpperCase()}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid container spacing={0} justifyContent="center">
                          <Grid xs={1.5} display="flex" justifyContent="flex-start">
                            <Icon>
                              <DescriptionIcon />
                            </Icon>
                          </Grid>
                          <Grid xs={10.5} display="flex" justifyContent="flex-start">
                            <Typography variant="body1">
                              {member.description}
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              )
            })
            }
          </Grid>
        </Card>
      </div>
      <div className='social-media'>
        <Grid container spacing={0} justifyContent="center">
          <Grid xs={12} display="flex" justifyContent="center">
            <Typography variant='h4'>OUR SOCIAL</Typography>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={0} justifyContent="center">
          <SocialMedia />
        </Grid>
      </div>
    </div>
  )
}

export default HomePage
