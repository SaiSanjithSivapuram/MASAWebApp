import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import LeadershipTeam from './LeadershipTeam';
import MechanicalTeam from './MechanicalTeam';
import ElectricalTeam from './ElectricalTeam';
import ProjectManagementTeam from './ProjectManagementTeam';
import "./Teams.css"

function Teams() {
    const { team } = useParams('team');

    return (
        <div>
            {team == 'leadership-team' && <LeadershipTeam team={team} />}
            {team == 'mechanical-team' && <MechanicalTeam team={team} />}
            {team == 'electrical-team' && <ElectricalTeam team={team} />}
            {team == 'project-management-team' && <ProjectManagementTeam team={team} />}
        </div>
    )
}

export default Teams
