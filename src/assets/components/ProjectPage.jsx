import "../components/ProjectPage.css";
import { forwardRef, useState, useRef } from "react";

const ProjectPage = function ProjectPage({ projectData, selected }) {

 const selectedProject = selected

  const projectsArr = [projectData];
  const projects = projectsArr[0];
  const taskArr = projectsArr[0][selectedProject].tasks;
  const [taskUpdated, setTaskUpdated] = useState([...taskArr]); // Spread to create a new array copy
  const taskRef = useRef();

  function handleClick() {
    const newTask = taskRef.current.value;
    if (newTask) {
      const updatedTasks = [...taskUpdated, newTask]; // Create a new array with the added task
      setTaskUpdated(updatedTasks);
      taskRef.current.value = "";
    }
  }

  function handleRemoveTask(index) {
    const updatedTasks = taskUpdated.filter((_, i) => i !== index); // Remove the task at the clicked index
    setTaskUpdated(updatedTasks);
  }

  return (
    <>
      <div className="projectContainer">
        <h1 style={{ fontSize: "40pt" }}>
          {projectsArr[0][selectedProject].projectName}
        </h1>
        <h4 className="projectDetails" style={{ fontSize: "20pt" }}>
          {projectsArr[0][selectedProject].description}
        </h4>
        <h4 className="projectDetails" style={{ fontSize: "20pt" }}>
          Due: {projectsArr[0][selectedProject].dueDate}
        </h4>
      </div>
      <div className="taskContainer">
        <h2 style={{ fontSize: "30pt" }}>Tasks:</h2>
        <input
          type="text"
          ref={taskRef}
          placeholder="Enter Task"
          className="inputStyle"
        />
        <button className="saveBtn" onClick={handleClick}>
          Add Task
        </button>
      </div>
      <div>
        {taskUpdated.length > 0
          ? taskUpdated.map((el, index) => (
              <div key={index} className="flex taskContainer">
                <p style={{ fontSize: "20pt" }}>{el}</p>
                <button
                  className="cancelBtn"
                  style={{ fontSize: "15pt" }}
                  onClick={() => handleRemoveTask(index)}
                >
                  Done
                </button>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default ProjectPage;
