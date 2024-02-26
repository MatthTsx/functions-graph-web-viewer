import React from 'react'

const arr = [
    "log x", "sei la", "x^2"
]

function Input() {
  return (
    <div className='text-white w-[30%] h-full rounded-md shadow-md overflow-hidden relative bg-neutral-950 flex items-center justify-center flex-col'>
        <div className='bg-blue-900/20 blur-2xl w-full h-full absolute'/>
        <p className='text-xl font-semibold text-neutral-50/90'>Insert your function</p>
        <div>
            {arr.map((i,j) => <p key={j}>{i}</p>)}
        </div>
    </div>
  )
}

export default Input