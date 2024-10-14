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
  isError(prevError => ({
    ...prevError,
     name: true
  }))
 }
 
   
 if (description.current.value === '') {
    isError(prevError => ({
      ...prevError,
       descr: true
    }))
  }
  
   
 if (dueDate.current.value === '' || !dateRegex.test(dueDate.current.value)) {
  isError(prevError => ({
    ...prevError,
     dueDate: true
  }))
  console.log(dateRegex.test(dueDate.current.value))
  console.log(dueDate.current.value)
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
    <>
    {error.name ? <h4>Please Enter A Project Name</h4> : null}
      <input
        type="text"
        ref={projectName}
        placeholder="Project"
        className="center inputStyle"
      />
      {error.descr ? <h4>Please Enter A Description</h4> : null}
      <input
        type="text"
        ref={description}
        placeholder="Description"
        className="spacing inputStyle desc"
      />
      {error.dueDate ? <h4>Please Enter A Date in MM/DD/YY Format</h4> : null}
      <input
        type="text"
        ref={dueDate}
        placeholder="Due Date: MM/DD/YYYY"
        className="inputStyle "
      />
      <div >
      <button onClick={handleClick} className="saveBtn">Save</button>
      <button onClick={() => handleCancel('cancel')} className="cancelBtn">Cancel</button>
      </div>
    </>
  );
}
