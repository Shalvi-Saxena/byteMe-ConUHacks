import { getToken } from '../../utils/lib';
import {
  api
} from '../../constants';
const {
  BASE_URL,
  RECOMMENDATION,
} = api; 

const getRecommendations = async () => {
  try {
    let url = new URL(`${process.env.REACT_APP_API_URL}${BASE_URL}${RECOMMENDATION}`);
    
    const response = await fetch(url, {
      headers: {
        'Authorization': getToken(),
      },
    });
    return response.json();
  } catch (error) {
    console.log('[api/recommendation] Error getting recommendations', error);
    return null;
  }
};

export {
  getRecommendations,
};
