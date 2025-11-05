import React from 'react'

function Button({text}) {
  return (
    <div>
        <button className='border-none rounded-md outline-none px-[2rem] font-semibold text-center py-2 bg-[#e4685d] hover:shadow-lg transform transition duration-300 hover:scale-110 hover:bg-[#c9544d]'>{text}</button>
    </div>
  )
}

export default Button