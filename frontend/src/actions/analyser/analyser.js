
import { analyserApi } from '../../apis';
import {
  actions
} from '../../constants';

const { analyseImageFile } = analyserApi;
const {
  ANALYSE_FAILURE,
  ANALYSE_SUCCESS,
} = actions;

export function analyseImage(action, { dispatch, args }) {
  dispatch({
    type: action
  });
  return analyseImageFile(args)
    .then(data => {
      const { responseObject } = data || {};
      return dispatch({
        type: ANALYSE_SUCCESS,
        payload: {
          type: ANALYSE_SUCCESS,
          data: responseObject,
        },
      });
    })
    .catch(error => {
      console.log('[actions onLogin.js] Error uploading file', error);
      return dispatch({
        type: ANALYSE_FAILURE,
        payload: {
          error
        },
      });
    })
};