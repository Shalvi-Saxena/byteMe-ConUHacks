import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import CloseIcon from '@mui/icons-material/Close';
import CreateIcon from '@mui/icons-material/Create';
import { Link } from "react-router-dom"
import FolderIcon from '@mui/icons-material/Folder';
import { useNavigate } from "react-router-dom";


export const UploadBtn = () => {
  const navigate = useNavigate();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleCapture = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        // const newUrl = URL.createObjectURL(file);
        navigate("/upload", { state: { imageURL: file } });
      }
    }
  }

  const handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    });
  };

  return (
    <div className='fixed right-10 bottom-10 flex flex-col items-end'>
      {isMenuVisible &&
        <div className='flex flex-col mb-5 bg-slate-600 p-2 rounded-md'>
          {/* <div className='flex m-2 items-center justify-end cursor-pointer' >
            <label htmlFor="files" className="text-white text-lg font-medium ">Scan Receipt</label>
            <input id="files" className='hidden' type="file" onChange={(e) => handleCapture(e.target)} />
            <PhotoCameraIcon className='text-white ml-4' style={{ fontSize: 30 }} />
          </div> */}
          <div className='flex m-2 items-center justify-end cursor-pointer mt-5'>
            <p className='text-white text-lg font-medium'>
              <input
                type="file"
                id="image"
                accept="image/png, image/jpeg"
                onChange={(e) => handleImageChange(e)}
                required
              />
            </p>
          </div>
          <Link to="/add-expense">
            <div className='flex m-2 items-center cursor-pointer mt-5'>
              <p className='text-white text-lg font-medium'>Add Manually</p>
              <CreateIcon className='text-white ml-4' style={{ fontSize: 30 }} />
            </div>
          </Link>
        </div>}
      <div className='h-14 w-14 bg-slate-500 rounded-full flex items-center justify-center cursor-pointer'
        onClick={() => setIsMenuVisible(!isMenuVisible)}>
        {isMenuVisible ? <CloseIcon className='text-white' /> : <AddIcon className='text-white' />}
      </div>
    </div>

  )
}