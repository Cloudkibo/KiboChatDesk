import { combineReducers } from 'redux';

import { connectInfo } from './connectinfo.reducer';
import { chatListInfo } from './chatlist.reducer';
import { contactListInfo } from './contactlist.reducer';

const appReducer = combineReducers({
  connectInfo,
  chatListInfo,
  contactListInfo
});

export default appReducer;
