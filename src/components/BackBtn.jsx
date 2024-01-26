import React from 'react'

export default function BackBtn({label}) {
  return (
    <div className='flex flex-row rounded-md border-grey px-7 py-2 my-2 gap-5  border-[#64748b] border-solid border-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
        </svg>
        <span className='text-xl font-medium'>{label}</span>
    </div>
  )
}

