import "../components/ProjectPage.css";
import { useState, useRef, useEffect } from "react";

const ProjectPage = function ProjectPage({ projectData, selected }) {
  const selectedProject = selected;
  
 
  const projectsArr = [projectData];
  const projects = projectsArr[0];
  const taskRef = useRef();

  
  const [taskUpdated, setTaskUpdated] = useState([...projects[selectedProject].tasks]);

  // Effect to update tasks when the selected project changes
  useEffect(() => {
    // Update the task state to the tasks of the newly selected project
    setTaskUpdated([...projects[selectedProject].tasks]);
  }, [selectedProject, projects]);


  function handleClick() {
    const newTask = taskRef.current.value;
    if (newTask) {
      const updatedTasks = [...taskUpdated, newTask]; 
      setTaskUpdated(updatedTasks); 
      taskRef.current.value = ""; 
      projects[selectedProject].tasks.push(newTask); // Add new task to the project data
    }
  }

  
  function handleRemoveTask(index) {
    const updatedTasks = taskUpdated.filter((_, i) => i !== index); // Remove the task at the clicked index
    setTaskUpdated(updatedTasks); 
    projects[selectedProject].tasks = updatedTasks; // Update the actual project data to reflect changes
  }

  return (
    <>
      <div className="projectContainer">
        <h1 style={{ fontSize: "40pt" }}>
          {projects[selectedProject].projectName}
        </h1>
        <h4 className="projectDetails" style={{ fontSize: "20pt" }}>
          {projects[selectedProject].description}
        </h4>
        <h4 className="projectDetails" style={{ fontSize: "20pt" }}>
          Due: {projects[selectedProject].dueDate}
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
