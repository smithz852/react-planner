import '../components/ProjectInputs.css'

export default function ProjectInputs() {
  return (
    <>
      <input type="text" value='Project Name' className='center inputStyle'/>
      <input type="text" value='Description'className='spacing inputStyle desc'/>
      <input type="text" value='Due Date' className='inputStyle '/>
    </>
  )
}