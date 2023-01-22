import { getToken } from '../../utils/lib';
import {
  api
} from '../../constants';
const {
  BASE_URL,
  S3,
} = api; 

const getS3UploadUrl = async (image) => {
  try {
    let url = new URL(`${process.env.REACT_APP_API_URL}${BASE_URL}${S3}`);
    let data = new FormData();
    data.append('file', image);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': getToken(),
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    console.log('[api/recommendation] Error uploading image', error);
    return null;
  }
};

export {
  getS3UploadUrl,
};
