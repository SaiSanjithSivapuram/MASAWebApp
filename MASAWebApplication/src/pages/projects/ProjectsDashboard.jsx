import { Card, CardContent, Grid, IconButton, Input, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { clearProjectInput, setProjectInput, setProjectsData } from "./store/projectSlice";
import { useEffect, useState } from "react";
import { ProjectsData } from "../../data/ProjectsData";
import Loading from "../../component/loading/Loading";
import { motion } from "framer-motion";
import DateRangeIcon from '@mui/icons-material/DateRange';
import { useNavigate } from "react-router";
import "./projects.css";

function ProjectsDashboard() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const projectInput = useSelector((state) => state.project.searchText);
    const projectsData = useSelector((state) => state.project.projectsData.data);
    const loading = useSelector((state) => state.project.projectsData.loading);

    const [localProjectData, setLocalProjectData] = useState([]);

    useEffect(() => {
        dispatch(setProjectsData(ProjectsData))
    }, [])

    useEffect(() => {
        setLocalProjectData(projectsData)
    }, [projectsData])

    useEffect(() => {
        var filteredData = []
        filteredData = projectsData.filter((project) => project.name.toLowerCase().includes(projectInput.toLowerCase()))
        setLocalProjectData(filteredData)
    }, [projectInput])

    return (
        <>
            {loading ? <Loading />
                : <>
                    <div className="projectsPageHeader">
                        <Grid container spacing={0} justifyContent="center">
                            <Grid xs={11} display="flex" justifyContent="center">
                                <Input
                                    className="projectsInput"
                                    fullWidth
                                    placeholder="Search for Projects"
                                    value={projectInput}
                                    onChange={(ev) => dispatch(setProjectInput(ev.target.value))}
                                    disableUnderline
                                    endAdornment={
                                        projectInput !== "" && <IconButton className="projectInputBtn" onClick={() => dispatch(clearProjectInput())}>
                                            <CloseIcon />
                                        </IconButton>
                                    }
                                    variant="standard"
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className="projectsPageContent dashboard">
                        <Grid container spacing={0} display="flex" justifyContent={{ xs: "center", md: "flex-start", lg: "flex-start" }}>
                            {localProjectData.map((project, index) => {
                                return (
                                    <Grid xs={11} md={6} lg={4} display="flex" justifyContent="center">
                                        <Card className="projectCard" sx={{ margin: "20px auto", width: "90%" }}
                                            component={motion.div}
                                            initial={{ y: 20, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            whileHover={{ scale: 1.02 }}
                                            viewport={{ once: true }}
                                            onClick={() => navigate(project.url)}
                                        >
                                            <CardContent>
                                                <Grid container spacing={0} justifyContent="center">
                                                    <Grid xs={12} display="flex" justifyContent="flex-start">
                                                        <Typography variant="h5" component="div" className='projectCardTitle'>
                                                            {project.name.toUpperCase()}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                {project.date !== null && <Grid container spacing={0} justifyContent="center" alignItems="center" style={{ paddingTop: "4px" }}>
                                                    <Grid xs={1} display="flex" justifyContent="flex-start">
                                                        <DateRangeIcon className="projectCardIcon" fontSize="small" />
                                                    </Grid>
                                                    <Grid xs={11} display="flex" justifyContent="flex-start">
                                                        <Typography variant="p" component="div" className='projectCardDescription'>
                                                            {project.date}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>}
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </div>
                </>
            }
        </>
    )
}

export default ProjectsDashboard
