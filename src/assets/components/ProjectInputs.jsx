import { useState, useRef } from "react";
import "../components/ProjectInputs.css";

export default function ProjectInputs() {
  const [projectInfo, setProjectInfo] = useState();

  const projectName = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleClick() {
     setProjectInfo({
      projectName: projectName.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value
     })
  }

  return (
    <>
    
      <input
        type="text"
        ref={projectName}
        placeholder="Project"
        className="center inputStyle"
      />
      <input
        type="text"
        ref={description}
        placeholder="Description"
        className="spacing inputStyle desc"
      />
      <input
        type="text"
        ref={dueDate}
        placeholder="Due Date"
        className="inputStyle "
      />
      <button onClick={handleClick}>Save</button>
      <button>Cancel</button>
    </>
  );
}
