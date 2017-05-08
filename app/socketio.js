import io from 'socket.io-client';

import { setId, setPhoneId, setConnectionStatus, setSocketStatus, loadChatList
 } from './redux/actions/action';

const socket = io('https://api.cloudkibo.com');
let store;

export function initiateSocket(storeObj) {
  store = storeObj;
  socket.connect();
}

socket.on('connect', () => {
  store.dispatch(setSocketStatus(true));
  console.log('connected to socket server');
  // todo this should trigger on button press by user
  const data = {
    phone: store.getState().connectInfo.number
  };
  socket.emit('join_platform_room', data);
});

socket.on('joined_platform_room', (data) => {
  console.log(`joined platform room: ${data}`);
  store.dispatch(setId(data));
});

socket.on('platform_room_message', (data) => {
  if (store.getState().connectInfo.mobileId === '') {
    store.dispatch(setPhoneId(data.from_connection_id));
    store.dispatch(setConnectionStatus(true));
  }
  console.log(data);
  if (data.type === 'loading_chatlist') {
    store.dispatch(loadChatList(data.data));
    console.log(store.getState());
  }
});

socket.on('disconnect', () => {
  console.log('disconnected from socket server');
  store.dispatch(setSocketStatus(true));
});
