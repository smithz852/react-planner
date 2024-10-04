import '../components/SideBar.css'
import ProjectBtn from './ProjectBtn'

export default function SideBar() {
  return (
    <>
      <div className="sideBar">
        <h1 className="myProjectsHeader">My Projects</h1>
        <section className='flexCenter'>
         <ProjectBtn />
        </section>
      </div>
    </>
  )
}