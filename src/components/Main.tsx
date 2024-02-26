import React from 'react'
import { Input, Output } from '.'

function MainComponent() {
  return (
    <div className='flex items-center justify-center w-[90%] h-[80%] gap-12 z-50'>
        <Input/>
        <Output/>
    </div>
  )
}

export default MainComponent