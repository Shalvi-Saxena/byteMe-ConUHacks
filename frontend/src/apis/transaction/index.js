import { getToken } from '../../utils/lib';
import {
  api
} from '../../constants';
const {
  BASE_URL,
  TRANSACTION,
} = api; 

const getTransactions = async () => {
  try {
    let url = new URL(`${process.env.REACT_APP_API_URL}${BASE_URL}${TRANSACTION}`);
    
    const response = await fetch(url, {
      headers: {
        'Authorization': getToken(),
      },
    });
    return response.json();
  } catch (error) {
    console.log('[api/transaction] Error getting transactions', error);
    return null;
  }
};

const updateTransaction = async (data) => {
  try {
    let url = `${process.env.REACT_APP_API_URL}${BASE_URL}${TRANSACTION}/`;
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
    console.log('[api/user] Error updating transaction', error);
    return null;
  }
};


const deleteTransaction = async (data) => {
  try {
    let url = `${process.env.REACT_APP_API_URL}${BASE_URL}${TRANSACTION}/`;
    url += data._id;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'Authorization': getToken(),
      },
    });
    return response.json();
  } catch (error) {
    console.log('[api/user] Error deleting transaction', error);
    return null;
  }
};

export {
  getTransactions,
  updateTransaction,
  deleteTransaction,
};
