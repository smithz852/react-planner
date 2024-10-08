import '../components/MainPage.css'
import ProjectBtn from './ProjectBtn'
import ProjectInputs from './ProjectInputs'



export default function MainPage({addProject, showProject}) {

  function passHandle() {
    addProject()
  }

function cancelInput() {
  addProject()
}

  return (
  <div className="main">
<div className='startingProject'>
{!showProject ? <><img src="public\logo.png" alt="notepad and pen image" />
<h1>No Project Selected</h1>
<ProjectBtn btnName='+ Add Project' clickedBtn={passHandle}/> </> : null}
{showProject ? <ProjectInputs cancelData={cancelInput} /> : null}
</div>
    
      </div>
  )
}