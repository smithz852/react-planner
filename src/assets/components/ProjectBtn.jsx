import { useState } from "react"

export default function ProjectBtn({clickedBtn}) {

  function handleClick() {
    console.log('tesst')
    clickedBtn()
  }

   return (
    <>
       <button className='addProjectBtn'  onClick={handleClick}>
            <p className='btnText'>+ Add Project</p>
            </button>
    </>
   )
}