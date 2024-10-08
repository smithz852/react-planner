import MainPage from "./assets/components/MainPage";
import SideBar from "./assets/components/SideBar";
import { useState } from "react";

function App() {

  const [projectInput, setProjectInput] = useState(false)

  function handleProjectInput() {
    setProjectInput((show) => !show)
  }


  return (
    <>
    <div className="mainFlex">
      <SideBar addProject={handleProjectInput} showProject={projectInput} />
      <MainPage addProject={handleProjectInput} showProject={projectInput} />
      </div>
    </>
  );
}

export default App;
