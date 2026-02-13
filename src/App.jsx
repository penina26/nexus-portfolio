import React, { useState } from 'react'
import ProjectList from './components/ProjectList'
import Search from './components/Search';
import Form from './components/Form';
import { v4 as uuidv4 } from 'uuid'; // v4 generates random IDs

function App() {
  const [projects, setProjects] = useState([
    { id: 1, name: "Cyber UI Kit", category: "Design", image: "https://picsum.photos/400/300?random=1" },
    { id: 2, name: "Nexus Dashboard", category: "Web Dev", image: "https://picsum.photos/400/300?random=2" },
    { id: 3, name: "Neon Branding", category: "Branding", image: "https://picsum.photos/400/300?random=3" },
  ]);

  // Updating project state
  const [projectToEdit, setProjectToEdit] = useState(null);

  // Add search state
  const [searchTerm, setSearchTerm] = useState("");
  //filter logic
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //Delete logic

  const deleteProject = (id) => {
    // Keep only the projects that DON'T match the clicked ID
    const updatedProjects = projects.filter(project => project.id !== id);
    setProjects(updatedProjects);
  };

  // updating a project logic

  const updateProject = (updatedProject) => {
    // If the user clicked "Cancel", updatedProject will be null
    if (!updatedProject) {
      setProjectToEdit(null);
      return; // Stop here and don't try to map
    }

    // Otherwise, proceed with the update
    setProjects(projects.map(p =>
      p.id === updatedProject.id ? updatedProject : p
    ));
    setProjectToEdit(null);
  };
  //Add new project logic
  const addProject = (newProject) => {
    //create new project with unique id
    const projectWithId = {
      ...newProject,
      id: uuidv4(),// Generates something like '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
      image: newProject.image || `https://picsum.photos/400/300?random=${uuidv4()}`
    };
    setProjects([projectWithId, ...projects]);
  }

  return (
    <div className='app-container'>
      <header>
        <h1>NEXUS //</h1>
        <p>Creative Agency Portfolio</p>
      </header>

      <main>
        {/* Add the Form component */}
        <Form
          onAddProject={addProject}
          projectToEdit={projectToEdit}
          onUpdateProject={updateProject}
        />
        {/*  Pass the setter function to the Search */}
        <Search onSearchChange={setSearchTerm} />

        {/* 4. Pass the filtered list instead of the full list */}
        <ProjectList
          projects={filteredProjects}
          onDeleteProject={deleteProject}
          onEditProject={setProjectToEdit}
        />
      </main>

    </div>
  );
}

export default App
