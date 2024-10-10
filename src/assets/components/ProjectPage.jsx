import '../components/ProjectPage.css'

export default function ProjectPage({ projectData }) {

  const projectsArr = [projectData]
  const projects = projectsArr[0]
   console.log('project data', projectData)
  return (
    <>
    <div className="projectContainer">
      {projectsArr[0] !== undefined ? Object.keys(projects).map(keys => {
  const singleProject = projects[keys]
  // console.log('el', singleProject.projectName)
  return <>
  <h1>{singleProject.projectName}</h1>
  <h4 className='projectDetails'>{singleProject.description}</h4>
  <h4 className='projectDetails'>{singleProject.dueDate}</h4>
  </>
}) : null}
      </div>
    </>
  )
}

