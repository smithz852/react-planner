import '../components/SideBar.css'
import ProjectBtn from './ProjectBtn'
export default function SideBar({addProject}) {

function passHandle() {
  addProject()
}
  
  return (
    <>
      <div className="sideBar">
        <h1 className="myProjectsHeader">My Projects</h1>
        <section className='flexCenter'>
         <ProjectBtn clickedBtn={passHandle}/>
        </section>
      </div>
    </>
  )
}