
import { s3Api } from '../../apis';
import {
  actions
} from '../../constants';

const { getS3UploadUrl } = s3Api;
const {
  S3_UPLOAD_FAILURE,
  S3_UPLOAD_SUCCESS,
} = actions;

export function uploadFileToS3(action, { dispatch, args }) {
  dispatch({
    type: action
  });
  return getS3UploadUrl(args)
    .then(data => {
      const { responseObject } = data || {};
      return dispatch({
        type: S3_UPLOAD_SUCCESS,
        payload: {
          type: S3_UPLOAD_SUCCESS,
          data: responseObject,
        },
      });
    })
    .catch(error => {
      console.log('[actions onLogin.js] Error uploading file', error);
      return dispatch({
        type: S3_UPLOAD_FAILURE,
        payload: {
          error
        },
      });
    })
};