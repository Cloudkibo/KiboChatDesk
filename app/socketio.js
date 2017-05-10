import io from 'socket.io-client';

import { setId, setPhoneId, setConnectionStatus, setSocketStatus, loadChatList,
  loadGroupChatList, loadContactList } from './redux/actions/action';

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
    sendSocketMessage('loading_conversation', { phone: '+923333864540' });
  }
  if (data.type === 'loading_chatlist') {
    const chatListDataArray = [];
    for (let i = 0; i < data.data.length; i++) {
      chatListDataArray.push({
        date: data.data[i].date,
        contact_phone: data.data[i].contact_phone,
        msg: data.data[i].msg,
        display_name: data.data[i].display_name,
        pendingMsgs: data.data[i].pendingMsgs,
        type: 'conversation'
      });
    }
    store.dispatch(loadChatList(chatListDataArray));
  } else if (data.type === 'loading_group_chatlist') {
    for (let i = 0; i < data.data.length; i++) {
      store.dispatch(loadGroupChatList({
        date: data.data[i].date_creation,
        contact_phone: data.data[i].last_sender,
        msg: data.data[i].msg,
        display_name: data.data[i].group_name,
        pendingMsgs: data.data[i].unique_id,
        type: 'group'
      }));
    }
  } else if (data.type === 'loading_contacts') {
    const contactListDataArray = [];
    for (let i = 0; i < data.data.length; i++) {
      contactListDataArray.push({
        phone: data.data[i].phone,
        detailsshared: data.data[i].detailsshared,
        display_name: data.data[i].display_name,
        status: data.data[i].status,
        on_cloudkibo: data.data[i].on_cloudkibo
      });
    }
    store.dispatch(loadContactList(contactListDataArray));
  }
});

socket.on('disconnect', () => {
  console.log('disconnected from socket server');
  store.dispatch(setSocketStatus(true));
});

function sendSocketMessage(type, data) {
  socket.emit('platform_room_message', {
    phone: store.getState().connectInfo.number,
    from_connection_id: store.getState().connectInfo.id,
    to_connection_id: store.getState().connectInfo.mobileId,
    type,
    data
  });
}
