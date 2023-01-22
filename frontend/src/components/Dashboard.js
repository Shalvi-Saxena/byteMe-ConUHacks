import React, { useState,useEffect } from 'react'
import { UploadBtn } from './uploadBtn';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom"
import Slider from "react-slick";
import { PieChart } from './PieChart';
import { BarGraph } from './BarGraph';
import { LineGraph } from './LineGraph';
import { InsightCard } from './InsightCard';
import { RecoCard } from './RecoCard';

export const Dashboard = () => {

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isLangEN, setIsLangEN] = useState(true);
  const [recoList,setRecoList] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <div onClick={() => setIsMenuVisible(!isMenuVisible)}>
        <MenuIcon className='m-4' style={{ fontSize: 30 }} />
      </div>
      {isMenuVisible &&
        <div className='flex w-3/4 h-screen bg-gray-600 fixed top-0 left-0 z-40' >
          <CloseIcon className='absolute right-5 top-5 text-white' style={{ fontSize: 30 }} 
          onClick={() => setIsMenuVisible(!isMenuVisible)} />
          <div className='mt-5 ml-5'>
            <p className='text-white font-bold text-2xl'>Deep</p>
            <Link to="/"><p className='text-white text-xl mt-10'
              onClick={() => setIsMenuVisible(false)}>Home</p></Link>
            <Link to="/"><p className='text-white text-xl mt-5'
              onClick={() => setIsMenuVisible(false)}>History</p></Link>
            <Link to="/local"><p className='text-white text-xl mt-5'
              onClick={() => setIsMenuVisible(false)}>Local Deals</p></Link>
          </div>
          <div className='absolute bottom-32 flex w-full justify-center'>
            <div className='border-2 border-gray-900 flex w-1/2'>
              <div className={`w-1/2 h-12 flex items-center justify-center ${isLangEN && 'bg-gray-900'}`}
                onClick={() => setIsLangEN(true)}>
                <p className='text-white font-bold'>EN</p>
              </div>
              <div className={`w-1/2 h-12 flex items-center justify-center ${!isLangEN && 'bg-gray-900'}`}
                onClick={() => setIsLangEN(false)}>
                <p className='text-white font-bold'>FR</p>
              </div>
            </div>
          </div>
        </div>}
      <div className='px-5'>
        <p className=''>Hi Deep, here's your financial summary</p>
        <div className='mt-4'>
          <Slider {...settings}>
            <PieChart />
            <BarGraph />
            <LineGraph />
          </Slider>
        </div>
        <div className='mt-10'>
          {
            [1].map((item, index) => {
              return (
                <InsightCard key={index} />
              )
            })
          }
        </div>
        <div className='mt-2 pb-14'>
          {
            [1].map((item, index) => {
              return (
                <RecoCard key={index} />
              )
            })
          }
        </div>

      </div>
      <UploadBtn />
    </div>
  )
}
