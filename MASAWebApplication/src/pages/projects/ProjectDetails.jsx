import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import DateRangeIcon from '@mui/icons-material/DateRange';
import { motion } from 'framer-motion';
import "./projects.css";
import { useEffect } from 'react';

function ProjectDetails({ projectData }) {

    return (
        <>
            <div className='projectsDetailsPageHeader'>
                <Grid container spacing={0} display="flex" justifyContent="center" alignItems="center">
                    <Grid xs={12} md={8} lg={8} display="flex" justifyContent={{ xs: "center", md: "flex-start" }}>
                        <Typography variant="p" component="div" className='projectCardTitle' color={"#FFCF06"} fontSize={{ xs: "60px", md: "70px", lg: "70px" }}>
                            {projectData.name}
                        </Typography>
                    </Grid>
                    <Grid xs={12} md={3} lg={3} display="flex" justifyContent={{ xs: "center", md: "flex-end" }} alignItems="center" paddingTop={{ xs: "10px" }}>
                        <div className='projectsHighliter'>
                            <DateRangeIcon className="projectCardIcon" fontSize="small" style={{ marginRight: "6px" }} />
                            <Typography variant={{ xs: "p", lg: "h5" }} component="div" className='projectCardTitle'>
                                {projectData.date}
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={0} display="flex" justifyContent="center" paddingTop={{ xs: "10px" }}>
                    <Grid xs={11} display="flex" justifyContent="flex-start">
                        <Typography variant="body2" component="div" className='projectHeaderDescription' textAlign={{ xs: "center", md: "justify", lg: "justify" }}>
                            {projectData.description}
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            <div className='projectContent'>
                {projectData.details.map((details, index) => {
                    return (<Grid container spacing={0} display="flex" justifyContent="center">
                        <Card className="projectDetailCard" sx={{ margin: "20px auto", width: "92%" }}
                            component={motion.div}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <CardHeader className='projectDetailCardTitle' title={
                                <Grid container spacing={0} display="flex" justifyContent="center">
                                    <Grid xs={12} md={11.45} lg={11.45} display="flex" justifyContent={{ xs: "center", md: "flex-start", lg: "flex-start" }}>
                                        <Typography variant="h5" component="div" className='projectCardTitle'>
                                            {details.name}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            } />
                            <CardContent>
                                <Grid container spacing={0} display="flex" justifyContent="center">
                                    <Grid xs={12} display="flex" justifyContent="flex-start">
                                        <Typography variant="body1" component="div" className='projectCardDescription'>
                                            {details.description}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    )
                })}
            </div>
        </>
    )
}

export default ProjectDetails
