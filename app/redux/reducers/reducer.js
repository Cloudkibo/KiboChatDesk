import { combineReducers } from 'redux';
import * as ActionTypes from '../constants/constants';

const initialState = {
  mobileData: {}
};

const initialDataLoad = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.InitialDataLoad:
      return {
        mobileData: action.data
      };

    default:
      return state;
  }
};

const appReducer = combineReducers({
  initialDataLoad
});

export default appReducer;
