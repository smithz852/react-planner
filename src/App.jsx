import MainPage from "./assets/components/MainPage";
import SideBar from "./assets/components/SideBar";
import { useState } from "react";

function App() {

  const [projectInput, setProjectInput] = useState(false)
  const [allProjectData, setProjectData] = useState()

  function handleProjectInput() {
    setProjectInput((show) => !show)
  }

  function handleProjectData(projID, newProject) {
    console.log('project data', projID)
    console.log(newProject)
     setProjectData(prevData => {
      return {
        ...prevData,
        [projID]: newProject
      }
     })
  }


  return (
    <>
    <div className="mainFlex">
      <SideBar addProject={handleProjectInput} showProject={projectInput} allProjects={allProjectData}/>
      <MainPage addProject={handleProjectInput} showProject={projectInput} projects={handleProjectData}/>
      </div>
    </>
  );
}

export default App;
