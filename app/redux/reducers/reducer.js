import { combineReducers } from 'redux';

import { connectInfo } from './connectinfo.reducer';
import { chatListInfo } from './chatlist.reducer';

const appReducer = combineReducers({
  connectInfo,
  chatListInfo
});

export default appReducer;
