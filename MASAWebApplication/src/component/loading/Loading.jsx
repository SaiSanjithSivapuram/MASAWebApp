import React from 'react'
import { Box, Grid, LinearProgress } from '@mui/material';

function Loading() {
    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <Grid container spacing={0} justifyContent="center">
                <Grid xs={12} display="flex" justifyContent="center">
                    <img src='/icons/MASA Logo Color.svg' className='navBrandLogo' width={150} style={{ marginTop: "45vh" }} />
                </Grid>
            </Grid>
            <Grid xs={12} display="flex" justifyContent="center">
                <Box sx={{ width: '20%', paddingTop: "20px" }}>
                    <LinearProgress color='inherit' />
                </Box>
            </Grid>
        </div>
    )
}

export default Loading;
