import MainPage from "./assets/components/MainPage";
import SideBar from "./assets/components/SideBar";
import { useState, useRef } from "react";

function App() {

  const [projectInput, setProjectInput] = useState(false)
  const [allProjectData, setProjectData] = useState()
  const projID = useRef(0)

  function handleProjectInput() {
    setProjectInput((show) => !show)
  }

  function handleProjectData(newProject) {
    
    console.log(projID.current += 1, newProject)
     setProjectData(prevData => {
      return {
        ...prevData,
        [projID.current += 1]: newProject
      }
     })
     console.log('all', allProjectData)
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
