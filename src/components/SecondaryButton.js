import React from 'react'
import { MdArrowOutward } from 'react-icons/md';

function SecondaryButton({text, onClick}) {
  return (
    <button onClick={onClick} className='text-light font-primary flex items-center'> 
    <span className='mr-2 '>{text} </span>
    <MdArrowOutward />
  </button>
  )
}

export default SecondaryButton