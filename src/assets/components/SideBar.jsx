import '../components/SideBar.css'

export default function SideBar() {
  return (
    <>
      <div className="sideBar">
        <h1 className="myProjectsHeader">My Projects</h1>
        <section className='flexCenter'>
          <button className='addProjectBtn'>
            <p className='btnText'>+ Add Project</p>
            </button>
        </section>
      </div>
    </>
  )
}