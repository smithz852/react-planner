import "../components/ProjectPage.css";
import { forwardRef, useState, useRef } from "react";

const ProjectPage = forwardRef(function ProjectPage({ projectData }, ref) {
  

  const [selectedProject, setSelectedProject] = useState(ref.current);
  const projectsArr = [projectData];
  const projects = projectsArr[0];
  const taskArr = projectsArr[0][selectedProject].tasks
  const [taskUpdated, isTaskUpdated] = useState(taskArr)

  const taskRef = useRef()

  
  

function handleClick() {
  
  console.log('taskArr', taskArr)
  isTaskUpdated(taskArr.push(taskRef.current.value))
  console.log('push', selectedProject)
  
}

  // console.log("project data", projectData);
  // console.log("key obj", parseInt(Object.keys(projects)));

  return (
    <>
      <div className="projectContainer">
        <h1 style={{'fontSize': '40pt'}}>{projectsArr[0][selectedProject].projectName}</h1>
        <h4 className="projectDetails" style={{'fontSize': '20pt'}}>
          {projectsArr[0][selectedProject].description}
        </h4>
        <h4 className="projectDetails" style={{'fontSize': '20pt'}}>
          Due: {projectsArr[0][selectedProject].dueDate}
        </h4>
      </div>
      <div className="taskContainer">
      <h2 style={{'fontSize': '30pt'}}>Tasks:</h2>
      <input type="text" ref={taskRef}
        placeholder="Enter Task" className="inputStyle"/>
        <button className="saveBtn" onClick={handleClick}>Add Task</button>
        </div>
        <div>
         {taskUpdated > 0 ? taskArr.map(el => {
          return <div className="flex taskContainer">
            <p style={{'fontSize': '20pt'}}>{el}</p>
            <button className="cancelBtn" style={{'fontSize': '15pt'}}>Done</button>
            </div>
         })
        : null}
        </div>
    </>
  );
});



export default ProjectPage;
