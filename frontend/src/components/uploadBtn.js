import React,{useState} from 'react'
import AddIcon from '@mui/icons-material/Add';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import CloseIcon from '@mui/icons-material/Close';
import CreateIcon from '@mui/icons-material/Create';
import { Link } from "react-router-dom"
import FolderIcon from '@mui/icons-material/Folder';

export const UploadBtn = () => {

    const [isMenuVisible,setIsMenuVisible] = useState(false);
  return (
    <div className='fixed right-10 bottom-10 flex flex-col items-end'>
        {isMenuVisible &&
        <div className='flex flex-col mb-5'>
            <Link to="/upload">
                <div className='flex m-2 items-center justify-end cursor-pointer'>
                    <p className='text-gray-900 text-lg font-medium'>Scan Receipt</p>
                    <PhotoCameraIcon className='text-slate-500 ml-4' style={{fontSize:35}} />
                </div>
            </Link>
            <Link to="/upload">
                <div className='flex m-2 items-center justify-end cursor-pointer'>
                    <p className='text-gray-900 text-lg font-medium'>Upload</p>
                    <FolderIcon className='text-slate-500 ml-4' style={{fontSize:35}} />
                </div>
            </Link>
            <Link to="/">
                <div className='flex m-2 items-center cursor-pointer'>
                    <p className='text-gray-900 text-lg font-medium'>Add Manually</p>
                    <CreateIcon className='text-slate-500 ml-4' style={{fontSize:35}} />
                </div>
            </Link>
        </div>}
        <div className='h-14 w-14 bg-slate-500 rounded-full flex items-center justify-center cursor-pointer'
        onClick={()=>setIsMenuVisible(!isMenuVisible)}>
            { isMenuVisible ? <CloseIcon className='text-white' /> : <AddIcon className='text-white' />}
        </div>
    </div>
   
  )
}
