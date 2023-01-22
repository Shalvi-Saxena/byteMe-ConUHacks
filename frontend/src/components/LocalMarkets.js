import React from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from "react-router-dom"

export const LocalMarkets = () => {
    const DATA = [
        {
            id:1,
            name:"The Concordia Farmer's Market",
            text:"10% OFF on all Fresh Produce till 1st Feb"
        },
        {
            id:2,
            name:"Westmount Market",
            text:"20% OFF on all dairy products for 2 days"
        }
    ]
  return (
    <div className='p-4 flex flex-col'>
        <Link to="/">
            <div className='fixed left-5 top-3'>
                <KeyboardBackspaceIcon style={{fontSize:35}} />
            </div>
        </Link>
        <p className='w-full text-center font-bold text-xl'>Find Deals</p>
        <div className='flex justify-around mt-4'>
            <div className='bg-white border-2 border-gray-500 rounded-full px-10 flex py-1'>
                <PlaceIcon className='mr-3' />
                <p className='text-base'>
                    Concordia University
                </p>
            </div>
            <div className='bg-gray-700 rounded px-3 py-1'>
                <p className='text-white text-base font-medium'>
                    Search
                </p>
            </div>
        </div>
        <div className='mt-5'>
            {
                DATA.map((item) => {
                    return(
                        <div className='flex shadow-lg h-40 rounded p-3 flex-col mt-3'>
                            <p className='text-lg font-semibold'>
                                {item.name}
                            </p>
                            <p className='mt-2 text-base'>
                                {item.text}
                            </p>
                            <div className='bg-gray-700 rounded-md px-4 py-2 mt-5 flex justify-center'> 
                                <p className='text-white font-medium text-lg'>Get Coupon Code</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
