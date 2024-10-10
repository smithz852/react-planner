import '../components/SideBar.css'
import ProjectBtn from './ProjectBtn'
export default function SideBar({addProject, showProject, allProjects}) {

  const projectsArr = [allProjects]
  const projects = projectsArr[0]
  console.log(allProjects)

function passHandle() {
  addProject()
}
  
  return (
    <>
      <div className="sideBar">
        <h1 className="myProjectsHeader">My Projects</h1>
        <section className='flexCenter'>
        {(showProject !== 'input') ? <ProjectBtn btnName='+ Add Project' clickedBtn={passHandle}/> : null}
        </section>
        
         {projectsArr[0] !== undefined ? Object.keys(projects).map(keys => {
            const singleProject = projects[keys]
            console.log('side bar', singleProject.projectName)
            // console.log('el', singleProject.projectName)
            return <div>
              <p className='projectBtns'>{singleProject.projectName}</p>
            </div>
         }) : null}
      </div>
    </>
  )
}