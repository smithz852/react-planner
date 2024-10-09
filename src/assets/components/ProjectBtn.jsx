import { useState } from "react"

export default function ProjectBtn({clickedBtn, btnName}) {

  function handleClick() {
    
    clickedBtn()
  }

   return (
    <>
       <button className='addProjectBtn'  onClick={handleClick}>
            <p className='btnText'>{btnName}</p>
            </button>
    </>
   )
}