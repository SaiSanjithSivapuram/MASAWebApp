import * as React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./Footer.css"
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

function Footer() {

    return (
        <Grid container spacing={0} display="flex" justifyContent="center">
            <Grid xs={3} display="flex" justifyContent="center">
                <IconButton className='footerIcon facebook-icon'>
                    <FacebookIcon />
                </IconButton>
            </Grid>
            <Grid xs={3} display="flex" justifyContent="center">
                <IconButton className='footerIcon linkedin-icon'>
                    <LinkedInIcon />
                </IconButton>
            </Grid>
            <Grid xs={3} display="flex" justifyContent="center">
                <IconButton className='footerIcon youtube-icon'>
                    <YouTubeIcon />
                </IconButton>
            </Grid>
            <Grid xs={3} display="flex" justifyContent="center">
                <IconButton className='footerIcon instagram-icon'>
                    <InstagramIcon />
                </IconButton>
            </Grid>
        </Grid>
    );
}

export default Footer;