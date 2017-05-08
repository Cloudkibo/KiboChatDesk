import * as ActionTypes from '../constants/constants';

export function setPhoneNumber(data) {
  return {
    type: ActionTypes.LOAD_PHONE_NUMBER,
    data
  };
}

export function setId(data) {
  return {
    type: ActionTypes.LOAD_ID,
    data
  };
}

export function setPhoneId(data) {
  return {
    type: ActionTypes.LOAD_PHONE_ID,
    data
  };
}

export function setConnectionStatus(data) {
  return {
    type: ActionTypes.UPDATE_CONNECTION_STATE,
    data
  };
}

export function setSocketStatus(data) {
  return {
    type: ActionTypes.UPDATE_SOCKET_STATE,
    data
  };
}

export function loadChatList(data) {
  return {
    type: ActionTypes.LOAD_CHATLIST,
    data
  };
}
