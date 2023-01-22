import React from 'react'

export const InsightCard = () => {
  return (
    <div className='mt-5 w-full h-28 bg-gray-800 shadow-md rounded-lg flex items-center justify-center relative'>
        <p className='text-white font-semibold'>You spent $101 on coffee this month</p>
        <p className='text-white font-light text-xs absolute bottom-3 right-3'>Updated 12 hours ago</p>
    </div>
  )
}
