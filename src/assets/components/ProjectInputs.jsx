import { useState, useRef } from "react";
import "../components/ProjectInputs.css";

export default function ProjectInputs({cancelData, projectData}) {
const [error, isError] = useState({
  name: false,
  descr: false,
  dueDate: false
})

  const projectName = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleClick() {
    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
   
 if (projectName.current.value === '') {
  projectName.current.placeholder = 'Please Enter A Project Name'
  isError(prevError => ({
    ...prevError,
     name: true
  }))
 }
 
   
 if (description.current.value === '') {
  description.current.placeholder = 'Please Enter A Description'
    isError(prevError => ({
      ...prevError,
       descr: true
    }))
  }
  
   
 if (dueDate.current.value === '' || !dateRegex.test(dueDate.current.value)) {
  dueDate.current.value = ''
  dueDate.current.placeholder = "MM/DD/YYYY"
  isError(prevError => ({
    ...prevError,
     dueDate: true
  }))
  // console.log(dateRegex.test(dueDate.current.value))
  // console.log(dueDate.current.value)
   return
 } else {
  projectData({
    projectName: projectName.current.value,
    description: description.current.value,
    dueDate: dueDate.current.value,
    tasks: []
   })
 }
  }

  function handleCancel() {
   cancelData()
  }



  return (
    // NOTE: One way to setup inputs
    // <p>
    // <label>Name of input<label/>
    // <input />
    //</p>
    <>
      <input
        type="text"
        ref={projectName}
        placeholder="Project"
        className={`center  ${error.name ? 'error' : 'inputStyle'}`}
      />
      <input
        type="text"
        ref={description}
        placeholder="Description"
        className={`spacing  desc ${error.descr ? 'error' : 'inputStyle'}`}
      />
      <input
        type="text"
        ref={dueDate}
        placeholder="Due Date: MM/DD/YYYY"
        className={` inputStyle ${error.dueDate ? 'error' : null}`}
      />
      <div >
      <button onClick={handleClick} className="saveBtn">Save</button>
      <button onClick={() => handleCancel('cancel')} className="cancelBtn">Cancel</button>
      </div>
    </>
  );
}
