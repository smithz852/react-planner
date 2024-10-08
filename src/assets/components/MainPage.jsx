import '../components/MainPage.css'
import ProjectBtn from './ProjectBtn'
import ProjectInputs from './ProjectInputs'



export default function MainPage({addProject, showProject}) {

  function passHandle() {
    addProject()
  }
  return (
  <div className="main">
<div className='startingProject'>
{!showProject ? <><img src="public\logo.png" alt="notepad and pen image" />
<h1>No Project Selected</h1>
<ProjectBtn clickedBtn={passHandle}/> </> : null}
{showProject ? <ProjectInputs /> : null}
</div>
    
      </div>
  )
}