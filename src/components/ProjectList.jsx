import React from 'react'
import ProjectCard from './ProjectCard'

function ProjectList({ projects, onDeleteProject, onEditProject }) {
    return (
        <section className="project-list">
            {projects.map(project => (
                <ProjectCard key={project.id} project={project}
                    onDeleteProject={onDeleteProject}
                    onEditProject={onEditProject} />
            ))}
        </section>
    );
}

export default ProjectList
