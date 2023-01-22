import {
  actions
} from '../constants';

const {
  REQUEST_ANALYSE_SUCCESS,
  REQUEST_ANALYSE_FAILURE,
  REQUEST_ANALYSE,
} = actions;

const initialState = {
  data: {},
  error: null,
  isLoading: true,
  currentUser: null,
};

const reducer = (state = initialState, action) => {
  const { data } = action.payload || {};
  switch (action.type) {
    case REQUEST_ANALYSE:
      return {
        ...state,
        isLoading: true,
      }
    case REQUEST_ANALYSE_SUCCESS:
      return {
        ...state,
        data,
        isLoading: false,
      }
    case REQUEST_ANALYSE_FAILURE:
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
