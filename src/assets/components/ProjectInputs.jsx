import { useState, useRef } from "react";
import "../components/ProjectInputs.css";

export default function ProjectInputs({cancelData, projectData}) {
  const [projectID, setProjectID] = useState(1);

  const projectName = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleClick() {
     generateID()
     projectData(projectID, {
      projectName: projectName.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value
     })
  }

  function handleCancel() {
   cancelData()
  }

  function generateID() {
    setProjectID(projectID + 1)
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
      <div >
      <button onClick={handleClick} className="saveBtn">Save</button>
      <button onClick={handleCancel} className="cancelBtn">Cancel</button>
      </div>
    </>
  );
}
