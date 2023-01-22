
import {
  actions
} from '../../constants';
import { uploadFileToS3 } from './s3';

const {
  REQUEST_S3_UPLOAD,
} = actions;

// eslint-disable-next-line import/no-anonymous-default-export
export default (action, args) => (dispatch) => {
  switch (action) {
    case REQUEST_S3_UPLOAD:
      return uploadFileToS3(action, { dispatch, args });
    default:
      return;
  }
};
