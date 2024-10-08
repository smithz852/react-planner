import '../components/SideBar.css'
import ProjectBtn from './ProjectBtn'
export default function SideBar({addProject, showProject}) {

function passHandle() {
  addProject()
}
  
  return (
    <>
      <div className="sideBar">
        <h1 className="myProjectsHeader">My Projects</h1>
        <section className='flexCenter'>
         {!showProject ? <ProjectBtn btnName='+ Add Project' clickedBtn={passHandle}/> : null}
        </section>
      </div>
    </>
  )
}