import React from 'react'

export const InsightCard = () => {
  return (
    <div className='mt-5 w-full h-32 bg-gray-800 shadow-md rounded-lg flex items-center justify-center relative px-2'>
        <p className='text-white text-xs font-medium'>Looks like you have a recurring weekly expense for restaurants. Your average weekly expenditure on restaurants over the last 3 weeks has been 53$ (averaging 4 visits a week).</p>
        <p className='text-white font-light text-xs absolute bottom-3 right-3'>Updated 12 hours ago</p>
    </div>
  )
}
