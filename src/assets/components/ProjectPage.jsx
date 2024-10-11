import '../components/ProjectPage.css'
import { forwardRef, useState } from 'react'

const ProjectPage =  forwardRef(function ProjectPage({ projectData }, ref) {

  const [selectedProject, setSelectedProject] = useState(ref.current)

  const projectsArr = [projectData]
  const projects = projectsArr[0]
   console.log('project data', projectData)
   console.log('key obj', parseInt(Object.keys(projects)))
   console.log('ref', ref)
   console.log('projects', projects)
   console.log(selectedProject)
   console.log('example output', projectsArr[0][selectedProject].projectName)
  return (
    <>
    <div className="projectContainer">
    <h1>{projectsArr[0][selectedProject].projectName}</h1>
      <h4 className='projectDetails'>{projectsArr[0][selectedProject].description}</h4>
      <h4 className='projectDetails'>{projectsArr[0][selectedProject].dueDate}</h4>
    </div>
      
    </>  
  )
})



{/* <>
//     <div className="projectContainer">
//       {/* Need to make this render so that only the most recent, or the selected, project renders */}
//       {/* right now all available projects will be rendered on page with .map() */}
//       {projectsArr[0] !== undefined ? Object.keys(projects).map(keys => {
//   const singleProject = projects[keys]
//   // console.log('el', singleProject.projectName)
//   return <>
//   <div key={keys}>
//   <h1>{singleProject.projectName}</h1>
//   <h4 className='projectDetails'>{singleProject.description}</h4>
//   <h4 className='projectDetails'>{singleProject.dueDate}</h4>
//   </div>
//   </>
// }) : null}
//       </div>
//     </> */}

export default ProjectPage;