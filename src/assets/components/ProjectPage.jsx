import "../components/ProjectPage.css";
import { forwardRef, useState, useRef } from "react";

const ProjectPage = forwardRef(function ProjectPage({ projectData }, ref) {
  const [selectedProject, setSelectedProject] = useState(ref.current);

  const taskRef = useRef()

  const projectsArr = [projectData];
  const projects = projectsArr[0];



  // console.log("project data", projectData);
  // console.log("key obj", parseInt(Object.keys(projects)));

  return (
    <>
      <div className="projectContainer">
        <h1 style={{'font-size': '40pt'}}>{projectsArr[0][selectedProject].projectName}</h1>
        <h4 className="projectDetails" style={{'font-size': '20pt'}}>
          {projectsArr[0][selectedProject].description}
        </h4>
        <h4 className="projectDetails" style={{'font-size': '20pt'}}>
          Due: {projectsArr[0][selectedProject].dueDate}
        </h4>
      </div>
      <div className="taskContainer">
      <h2 style={{'font-size': '30pt'}}>Tasks:</h2>
      <input type="text" ref={taskRef}
        placeholder="Enter Task" className="inputStyle"/>
        <button className="saveBtn">Add Task</button>
        </div>
    </>
  );
});


export default ProjectPage;
