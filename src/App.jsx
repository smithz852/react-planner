import MainPage from "./assets/components/MainPage";
import SideBar from "./assets/components/SideBar";
import { useState, useRef } from "react";

function App() {
  const [projectInput, setProjectInput] = useState("home");
  const [allProjectData, setProjectData] = useState();
  const projID = useRef(0);

  function handleProjectInput(show) {
    console.log(show);
    if (show === "input") {
      setProjectInput("input");
    } else if (show === "save") {
      setProjectInput("save");
    } else {
      setProjectInput("home");
    }
  }

  function handleProjectData(newProject) {
    setProjectInput("save");
    console.log((projID.current += 1), newProject);
    setProjectData((prevData) => {
      return {
        ...prevData,
        [(projID.current += 1)]: newProject,
      };
    });
    console.log("all", allProjectData);
  }

  return (
    <>
      <div className="mainFlex">
        <SideBar
          addProject={handleProjectInput}
          showProject={projectInput}
          allProjects={allProjectData}
        />
        <MainPage
          addProject={handleProjectInput}
          showProject={projectInput}
          projects={handleProjectData}
          allData={allProjectData}
          ref={projID}
        />
      </div>
    </>
  );
}

export default App;
