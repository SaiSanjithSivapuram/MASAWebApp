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

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border: "0"
}));

function Footer() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0} justifyContent="center">
                <Grid xs={1}>
                    <Item className='gridItem'>
                        <IconButton className='footerIcon facebook-icon'>
                            <FacebookIcon />
                        </IconButton>
                    </Item>
                </Grid>
                <Grid xs={1}>
                    <Item className='gridItem'>
                        <IconButton className='footerIcon linkedin-icon'>
                            <LinkedInIcon />
                        </IconButton>
                    </Item>
                </Grid>
                <Grid xs={1}>
                    <Item className='gridItem'>
                        <IconButton className='footerIcon youtube-icon'>
                            <YouTubeIcon />
                        </IconButton>
                    </Item>
                </Grid>
                <Grid xs={1}>
                    <Item className='gridItem'>
                        <IconButton className='footerIcon instagram-icon'>
                            <InstagramIcon />
                        </IconButton>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Footer;