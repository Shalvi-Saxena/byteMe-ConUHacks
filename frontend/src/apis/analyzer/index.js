import {
  api
} from '../../constants';
const {
  ANALYSER,
} = api; 

const getS3UploadUrl = async (image_url) => {
  try {
    let url = `${ANALYSER}?r_url=${image_url}`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
    });
    return response.json();
  } catch (error) {
    console.log('[api/recommendation] Error analysing image', error);
    return null;
  }
};

export {
  getS3UploadUrl,
};
