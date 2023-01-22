import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from "react-router-dom"
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { s3Actions, analyserActions } from '../actions';
import { actions } from '../constants';
import { data } from './LineGraph';
import _ from 'lodash';

class UploadForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toDateString(),
      category: '',
      amount: '',
      note: '',
      location: '',
      imageUrl: null,
    };
  }

  // SearchPlaces = (text) => {
  //   setLocation(text.target.value)
  //   console.log('fg', text.target.value)
  //   var config = {
  //     method: 'get',
  //     url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${text.target.value}&type=restaurant&key=${process.env.REACT_APP_MAP_KEY}`,
  //     headers: { 'Access-Control-Allow-Origin': '*' }
  //   };
  //   axios(config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  handleImageChange = (e) => {
    this.props.s3Actions(actions.REQUEST_S3_UPLOAD, { image: e.target.files[0] })
    .then(data => {
      const image_url = _.get(data, 'data.payload.data.data.Location', 'http://farm6.staticflickr.com/5309/5639277711_aac21b0e02_z.jpg');
      if (!image_url) return;
      this.props.analyserActions(actions.REQUEST_ANALYSE, { image_url })
      .then(d => {
        console.log('data', d)
      })
    })

  };

  render() {
    const { date, category, amount, location, imageUrl, note } = this.state;
    return (
      <div>
        <Link to="/">
          <div className='w-full p-4 '>
            <KeyboardBackspaceIcon style={{ fontSize: 35 }} />
          </div>
        </Link>
        <div className='flex flex-col p-5'>
          <p className='text-white text-lg font-medium'>
            <input
              type="file"
              id="image"
              accept="image/png, image/jpeg"
              onChange={this.handleImageChange}
              required
            />
          </p>
          <div className='flex justify-around'>
            <div className='w-1/12 flex justify-start'>
              <p>Date</p>
            </div>
            <div className='w-3/4'>
              <input type="text" className='ml-4 w-full' value={date} />
              <div className='bg-gray-600 h-0.5 ml-4 w-10/12' />
            </div>
          </div>
          <div className='flex justify-around mt-10'>
            <div className='w-1/12 flex justify-start'>
              <p>Category</p>
            </div>
            <div className='w-3/4'>
              <input type="text" className='ml-4 w-full' value={category} />
              <div className='bg-gray-600 h-0.5 ml-4 w-10/12' />
            </div>
          </div>
          <div className='flex justify-around mt-10'>
            <div className='w-1/12 flex justify-start'>
              <p>Amount</p>
            </div>
            <div className='w-3/4'>
              <input type="text" className='ml-4 w-full' value={amount} />
              <div className='bg-gray-600 h-0.5 ml-4 w-10/12' />
            </div>
          </div>
          <div className='flex justify-around mt-10'>
            <div className='w-1/12 flex justify-start'>
              <p>Note</p>
            </div>
            <div className='w-3/4'>
              <input type="text" className='ml-4 w-full' value={note} />
              <div className='bg-gray-600 h-0.5 ml-4 w-10/12' />
            </div>
          </div>
          {/* <div className='flex justify-around mt-10'>
            <div className='w-1/12 flex justify-start'>
              <p>Location</p>
            </div>
            <div className='w-3/4'>
              <input type="text" className='ml-4 w-full' value={location} onChange={(text) => this.SearchPlaces(text)} />
              <div className='bg-gray-600 h-0.5 ml-4 w-10/12' />

            </div>
          </div> */}
        </div>
        <div className='pl-10'>
          <Link to="/">
            <div className='bg-slate-500 w-1/2 rounded p-2 flex items-center justify-center mt-10'>
              <p className='font-semibold text-xl text-white'>Save</p>
            </div>
          </Link>

        </div>

      </div>
    )
  };
}

const mapStateToProps = ({ s3, analyser }) => {
  return {
    s3, analyser,
  };
}

export default connect(
  mapStateToProps, { s3Actions, analyserActions }
)(UploadForm);