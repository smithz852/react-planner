import '../components/MainPage.css'
import ProjectBtn from './ProjectBtn'

export default function MainPage() {
  return (
  <div className="main">
    <div className='startingProject'>
    <img src="public\logo.png" alt="notepad and pen image" />
    <h1>No Project Selected</h1>
    <ProjectBtn />
    </div>
      </div>
  )
}