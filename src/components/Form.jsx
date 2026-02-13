import React, { useState, useEffect } from 'react';

function Form({ onAddProject, projectToEdit, onUpdateProject }) {
    const [formData, setFormData] = useState({ name: "", category: "", image: "" });

    // If projectToEdit changes, update the form fields
    useEffect(() => {
        if (projectToEdit) {
            setFormData(projectToEdit);
        } else {
            setFormData({ name: "", category: "", image: "" });
        }
    }, [projectToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (projectToEdit) {
            onUpdateProject(formData);
        } else {
            onAddProject(formData);
        }
        setFormData({ name: "", category: "", image: "" });
    };

    return (
        <form className="project-form" onSubmit={handleSubmit}>
            <h3>{projectToEdit ? "Update Project" : "Add New Project"}</h3>
            <div className="form-group">
                <input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Project Title"
                />
                <input
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="Category"
                />
                <button type="submit">
                    {projectToEdit ? "Save Changes" : "Publish to Nexus"}
                </button>
                {projectToEdit && (
                    <button type="button" onClick={() => onUpdateProject(null)}>Cancel</button>
                )}
            </div>
        </form>
    );
}
export default Form
