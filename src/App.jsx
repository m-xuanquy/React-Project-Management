import Sidebar from "./components/Sidebar";
import NoProject from "./components/NoProject";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";
import { useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAddingProject, setIsAddingProject] = useState(false);

  console.log(projects);

  function handleAddProject() {
    if (!isAddingProject) {
      setIsAddingProject(true);
    }
  }

  function handleCancel() {
    if (isAddingProject) {
      setIsAddingProject(false);
    }
  }

  function handleSubmit(project, event) {
    event.preventDefault();
    setProjects((prevProjects) => [project, ...prevProjects])
    setIsAddingProject(false);
  }

  function handleSelectProject(project) {
    setSelectedProject(project);
  }

  function handleDeleteProject(project) {
    setProjects((prevProjects) => prevProjects.filter(item => item !== project))
    setSelectedProject(null); 
  }

  var displayingScreen = <NoProject onAddProject={handleAddProject} projects={projects} />;
  if (isAddingProject) {
    displayingScreen = <NewProject onCancel={handleCancel} projects={projects} onSubmit={handleSubmit} />;
  }
  else if (selectedProject) {
    displayingScreen = <SelectedProject project={selectedProject} onDelete={handleDeleteProject}/>;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onAddProject={handleAddProject} projects={projects} onSelectProject={handleSelectProject}/>

      {displayingScreen}
    </main>

  );
}

export default App;
