import { useParams } from 'react-router';
import ProjectDetails from './ProjectDetails';
import { ProjectsDetailsData } from '../../data/ProjectDetailsData';

function ProjectWrapper() {
    const { projectName } = useParams('projectName');

    return (
        <div>
            {projectName == 'Operation HAZMAT' && <ProjectDetails projectData={ProjectsDetailsData[projectName]} />}
        </div>
    )
}

export default ProjectWrapper
