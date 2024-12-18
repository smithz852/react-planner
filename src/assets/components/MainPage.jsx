import '../components/MainPage.css'
import logo from '../../images/logo.png'
import ProjectBtn from './ProjectBtn'
import ProjectInputs from './ProjectInputs'
import ProjectPage from './ProjectPage'



const MainPage = function MainPage({addProject, showProject, projects, allData, selectedProj}) {

  

  function passHandle(pass) {
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
    {(showProject === 'save' && selectedProj) ? <ProjectPage projectData={allData} selected={selectedProj}/> : null}
<div className='startingProject'>

{showProject ==='home' ? <><img src={logo} alt="notepad and pen image" />
<h1>No Project Selected</h1>
<ProjectBtn btnName='+ Add Project' clickedBtn={passHandle}/> </> : null}

{showProject === 'input' ? <ProjectInputs cancelData={cancelInput} projectData={allProjects}/> : null}

</div>
      </div>
  )
}

export default MainPage;