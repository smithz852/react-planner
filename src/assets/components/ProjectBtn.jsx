import { useState } from "react"

export default function ProjectBtn({clickedBtn, btnName}) {

  function handleClick(type) {
    console.log(type)
    clickedBtn(type)
  }

   return (
    <>
       <button className='addProjectBtn'  onClick={() => handleClick('input')}>
            <p className='btnText'>{btnName}</p>
            </button>
    </>
   )
}