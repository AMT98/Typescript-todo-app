import React from 'react'

const InputField = () => {
  return (
    <form className='flex w-11/12 relative items-center'>
      <input 
      type= 'input'
      placeholder= "Enter todo here"
      className= 'w-full px-8 py-5 text-2xl border-none transition duration-200 rounded-3xl'
      />
      <button className='absolute right-0 w-12 h-12 m-3 rounded-3xl'>Enter</button>
    </form>
  )
}

export default InputField