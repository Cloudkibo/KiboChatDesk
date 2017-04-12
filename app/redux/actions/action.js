import * as ActionTypes from '../constants/constants';

export default function InitialDataLoad(data) {
  console.log('initial data load called');
  console.log(data);
  return {
    type: ActionTypes.INTIAL_DATA_LOAD,
    data
  };
}
