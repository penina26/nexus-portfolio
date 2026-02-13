import React from 'react'

function ProjectCard({ project, onDeleteProject, onEditProject }) {
    const { id, name, category, image } = project
    return (
        <div className='project-card'>
            <img src={image} alt="name" className="project-image" />
            <div className="project-info">
                <h3>{name}</h3>
                <span className="category-tag">{category}</span>
                <div className="card-actions">
                    <button className="edit-btn" onClick={() => onEditProject(project)}>
                        Edit
                    </button>
                    {/* Delete Button */}
                    <button
                        className="delete-btn"
                        onClick={() => onDeleteProject(id)}
                    >
                        Remove
                    </button>
                </div>
            </div>

        </div>
    );
}

export default ProjectCard
