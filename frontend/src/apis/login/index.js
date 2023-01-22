import {
  api
} from '../../constants';
const {
  LOGIN,
} = api; 

const login = async (credentials) => {
  try {
    const url = `${process.env.REACT_APP_API_URL}${LOGIN}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials)
    });
    return response.json();
  } catch (error) {
    console.log('[api/login] Error logging in', error);
    return null;
  }
};

export {
  login,
};
