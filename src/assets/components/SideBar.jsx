import '../components/SideBar.css'
import ProjectBtn from './ProjectBtn'
export default function SideBar({addProject, showProject, allProjects, clickedProject}) {

  const projectsArr = [allProjects]
  const projects = projectsArr[0]

function passHandle(type) {
  addProject(type)
}

function handleSelect(key) {
  // console.log('select Project', key)
  clickedProject(key)
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
            // console.log('side bar', singleProject.projectName)
            // console.log('key?', keys)
            // console.log('el', singleProject.projectName)
            return <div key={keys}>
              <p className='projectBtns' onClick={() => handleSelect(keys)}>{singleProject.projectName}</p>
            </div>
         }) : null}
      </div>
    </>
  )
}