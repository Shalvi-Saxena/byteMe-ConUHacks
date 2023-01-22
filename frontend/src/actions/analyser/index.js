
import {
  actions
} from '../../constants';
import { analyseImage } from './analyser';

const {
  REQUEST_ANALYSE,
} = actions;

// eslint-disable-next-line import/no-anonymous-default-export
export default (action, args) => (dispatch) => {
  switch (action) {
    case REQUEST_ANALYSE:
      return analyseImage(action, { dispatch, args });
    default:
      return;
  }
};
