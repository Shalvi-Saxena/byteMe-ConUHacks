import React from 'react'

export const RecoCard = ({data}) => {
  return (
    <div className='mt-5 w-full h-28 bg-gray-800 shadow-md rounded-lg flex items-center justify-center relative'>
        {/* {data.img && <img src="" alt="" />} */}
        <p className='text-white font-semibold'>{data?.text}</p>
    </div>
  )
}
