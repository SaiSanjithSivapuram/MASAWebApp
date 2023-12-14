import * as React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PlaceIcon from '@mui/icons-material/Place';
import SendIcon from '@mui/icons-material/Send';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PhoneIcon from '@mui/icons-material/Phone';
import GroupsIcon from '@mui/icons-material/Groups';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, IconButton, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import "./Footer.css"

function Footer() {

    const slideLeftAnimation = {
        hidden: { x: 40, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                delay: 0.2
            }
        }
    }

    const slideRightAnimation = {
        hidden: { x: -40, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                delay: 0.2
            }
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className='footer-bg'
        >
            <Grid container spacing={0} display="flex" justifyContent="space-around" sx={{ margin: '50px auto 0px auto' }}>
                <Grid xs={12} lg={4} display="flex" justifyContent="space-around">
                    <Grid xs={4} display="flex" justifyContent="center">
                        <IconButton className='footerIcon facebook-icon'
                            component={motion.a}
                            variants={slideRightAnimation}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            href='https://www.facebook.com/masadearborn'
                            target='blank'
                        >
                            <FacebookIcon fontSize='large' />
                        </IconButton>
                    </Grid>
                    <Grid xs={4} display="flex" justifyContent="center">
                        <IconButton className='footerIcon linkedin-icon'
                            component={motion.a}
                            variants={slideRightAnimation}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            href='https://www.linkedin.com/company/masa-dearborn/about/'
                            target='blank'
                        >
                            <LinkedInIcon fontSize='large' />
                        </IconButton>
                    </Grid>
                    <Grid xs={4} display="flex" justifyContent="center">
                        <IconButton className='footerIcon youtube-icon'
                            component={motion.a}
                            variants={slideRightAnimation}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            href='https://www.youtube.com/channel/UC1Xt-zJLpBNlFr07eB0KGww'
                            target='blank'
                        >
                            <YouTubeIcon fontSize='large' />
                        </IconButton>
                    </Grid>
                    <Grid xs={4} display="flex" justifyContent="center">
                        <IconButton className='footerIcon instagram-icon'
                            component={motion.a}
                            variants={slideRightAnimation}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            href='https://www.instagram.com/masadearborn/'
                            target='blank'
                        >
                            <InstagramIcon fontSize='large' />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid xs={12} lg={4} justifyContent="center">
                    <Grid container spacing={0} display="flex" justifyContent="center">
                        <Grid xs={12} display="flex" justifyContent="center">
                            <Typography sx={{ typography: { md: 'body1', xs: 'body2' }, marginTop: { xs: "30px" } }} className='footer-title'
                                component={motion.div}
                                variants={slideLeftAnimation}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                For more information about the MASA Dearborn?</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} display="flex" justifyContent="center">
                        <Grid xs={12} display="flex" justifyContent="center">
                            <Button className='footer-btn' variant='outlined' startIcon={<SendIcon />}
                                component={motion.a}
                                variants={slideLeftAnimation}
                                initial="hidden"
                                whileInView="visible"
                                whileHover={{ scale: 1.15 }}
                                viewport={{ once: true }}
                                href='mailto:masadearborn@umich.edu'
                            >
                                <Typography variant='p' className='footer-title'
                                    component={motion.div}
                                    variants={slideLeftAnimation}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    EMAIL US</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={0} display="flex" justifyContent="space-between" alignItems='center' sx={{ margin: '30px auto 50px auto' }}>
                <Grid xs={12} lg={6} display="flex" justifyContent="center">
                    <Button className='footer-btn' variant='outlined' startIcon={<AttachMoneyIcon />}
                        component={motion.a}
                        variants={slideRightAnimation}
                        initial="hidden"
                        whileInView="visible"
                        whileHover={{ scale: 1.15 }}
                        viewport={{ once: true }}
                        href='https://giving.umich.edu/basket/fund/333617'
                        target='blank'
                    >
                        <Typography variant='p' className='footer-title'
                            component={motion.div}
                            variants={slideRightAnimation}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            Donate</Typography>
                    </Button>
                    <Button className='footer-btn' variant='outlined' startIcon={<GroupsIcon />}
                        component={motion.a}
                        variants={slideRightAnimation}
                        initial="hidden"
                        whileInView="visible"
                        whileHover={{ scale: 1.15 }}
                        viewport={{ once: true }}
                        href='https://forms.office.com/pages/responsepage.aspx?id=tHdu5iRX10SHIQbfFgRQzgjFC4Os2BtBkLEuA0W8ogFUQVk3TUtJSzMxVjNaSUVVSDAzT0tSSVI1Ui4u'
                        target='blank'
                    >
                        <Typography variant='p' className='footer-title'
                            component={motion.div}
                            variants={slideRightAnimation}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            Join Our Team</Typography>
                    </Button>
                </Grid>
                <Grid xs={12} lg={4} display="flex-col" justifyContent="center">
                    <Grid container spacing={0} display="flex" justifyContent={{ xs: "center", lg: "flex-start" }} alignItems='center' sx={{ marginTop: { xs: "30px", md: "0px" } }}>
                        <Grid xs={12} display="flex" justifyContent="center" alignItems='center'>
                            <motion.div
                                variants={slideLeftAnimation}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <PlaceIcon className='footerIcon' sx={{ marginRight: "10px" }} />
                            </motion.div>
                            <Typography sx={{ typography: { md: 'body1', xs: 'body2' } }} className='footer-title'
                                component={motion.div}
                                variants={slideLeftAnimation}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                4901 Evergreen Road
                                <br />
                                Dearborn, MI 48128, US
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} display="flex" justifyContent={{ xs: "center", lg: "flex-start" }} alignItems='center' sx={{ margin: '20px auto 0px auto' }}>
                        <Grid xs={2} display="flex" justifyContent="center" alignItems='center'>
                            <motion.div
                                variants={slideLeftAnimation}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <PhoneIcon className='footerIcon' sx={{ marginRight: "10px" }} />
                            </motion.div>
                            <Typography sx={{ typography: { md: 'body1', xs: 'body2' } }} className='footer-title'
                                component={motion.div}
                                variants={slideLeftAnimation}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                +1(313)-455-3213
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={0} display="flex" justifyContent="space-around" sx={{ margin: '50px auto 50px auto' }}>
                <Grid xs={12} display="flex" justifyContent={"center"}>
                    <img src='/icons/UMD-CECS.png' className='navBrandLogo' width={50} />
                </Grid>
            </Grid>
        </motion.div>
    );
}

export default Footer;