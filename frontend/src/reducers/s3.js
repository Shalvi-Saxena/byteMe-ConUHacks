import {
  actions
} from '../constants';

const {
  REQUEST_S3_SUCCESS,
  REQUEST_S3_FAILURE,
  REQUEST_S3_UPLOAD,
} = actions;

const initialState = {
  image_url: null,
  error: null,
  isLoading: true,
  currentUser: null,
};

const reducer = (state = initialState, action) => {
  const { data } = action.payload || {};
  switch (action.type) {
    case REQUEST_S3_UPLOAD:
      return {
        ...state,
        isLoading: true,
      }
    case REQUEST_S3_SUCCESS:
      return {
        ...state,
        image_url: data.Location,
        isLoading: false,
      }
    case REQUEST_S3_FAILURE:
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
