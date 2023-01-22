import React from 'react'

export const RecoCard = ({data}) => {
  return (
    <div className='mt-5 w-full h-28 bg-gray-800 shadow-md rounded-lg flex items-center justify-center relative px-2'>
        {/* {data.img && <img src="" alt="" />} */}
        <p className='text-white text-xs font-medium'>I suggest cutting down this expense! If you make reduce your weekly visits to 2 visits then we predict a saving of 26$ a week!</p>
    </div>
  )
}
