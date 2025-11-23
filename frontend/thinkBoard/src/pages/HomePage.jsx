import React from 'react'
import toast from 'react-hot-toast'

const HomePage = () => {
  return (
    <div>
    <div>
     <button className='text-white' onClick={() => toast.success("Congrats")}>Click me</button>
     </div>
    </div>
  )
}

export default HomePage