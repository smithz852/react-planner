import '../components/MainPage.css'
import ProjectBtn from './ProjectBtn'
import ProjectInputs from './ProjectInputs'
import ProjectPage from './ProjectPage'



export default function MainPage({addProject, showProject, projects, allData}) {

  function passHandle(pass) {
    console.log(pass)
    addProject(pass)
  }

function cancelInput() {
  addProject()
}

function allProjects(newProject) {
  projects(newProject)
}

  return (
  <div className="main">
    {showProject === 'save' ? <ProjectPage projectData={allData}/> : null}
<div className='startingProject'>

{showProject ==='home' ? <><img src="public\logo.png" alt="notepad and pen image" />
<h1>No Project Selected</h1>
<ProjectBtn btnName='+ Add Project' clickedBtn={passHandle}/> </> : null}

{showProject === 'input' ? <ProjectInputs cancelData={cancelInput} projectData={allProjects}/> : null}

</div>
      </div>
  )
}