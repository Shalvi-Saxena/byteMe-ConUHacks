import { getToken } from '../../utils/lib';
import {
  api
} from '../../constants';
const {
  BASE_URL,
  USER,
} = api; 

const getCurrentUser = async () => {
  try {
    let url = `${process.env.REACT_APP_API_URL}${BASE_URL}${USER}`;
    const response = await fetch(url, {
      headers: {
        'Authorization': getToken(),
      },
    });
    return response.json();
  } catch (error) {
    console.log('[api/user] Error getting current user', error);
    return null;
  }
};

const updateUser = async (data) => {
  try {
    let url = `${process.env.REACT_APP_API_URL}${BASE_URL}${USER}/`;
    url += data._id;
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        'Authorization': getToken(),
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    console.log('[api/user] Error updating user', error);
    return null;
  }
};

export {
  getCurrentUser,
  updateUser,
};
