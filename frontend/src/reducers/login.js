import {
  actions
} from '../constants';

const {
  REQUEST_SIGN_IN,
  REQUEST_SIGN_IN_SUCCESS,
  REQUEST_SIGN_IN_FAILURE,
  REQUEST_LOGOUT,
} = actions;

const initialState = {
  data: null,
  error: null,
  isLoading: false,
  isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_LOGOUT:
      return {
        ...state,
        data: null,
        isLoggedIn: false,
      };
    case REQUEST_SIGN_IN:
      return {
        ...state,
        isLoading: true,
      }
    case REQUEST_SIGN_IN_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        data,
        isLoggedIn: true,
        isLoading: false
      }
    case REQUEST_SIGN_IN_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        isLoading: false,
        error,
      }
    default: 
      return state;
  };
};

export default reducer;
