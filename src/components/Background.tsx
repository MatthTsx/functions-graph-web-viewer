import React from 'react'

function Background() {
  return (
    <div className='absolute w-full h-full flex flex-col items-center justify-between overflow-hidden p-1 gap-1'>
        {[...Array<number>(25)].map((j,i) => <div key={i} className='flex justify-between items-center w-full flex-shrink-0 gap-1'>
            {[...Array<number>(50)].map((j,i) => <div key={i} className='bg-neutral-900 w-6 h-6 rounded-sm blur-[1px] flex-shrink-0'/>)}
        </div>)}
    </div>
  )
}

export default Background