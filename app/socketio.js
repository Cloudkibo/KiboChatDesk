import io from 'socket.io-client';

import { setId, setPhoneId, setConnectionStatus, setSocketStatus, loadChatList,
  loadGroupChatList, loadContactList, loadConversationList, loadArchiveChatList,
  loadGroupList, loadGroupMemberList, refreshGroupList, addImage
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

const screenViewer = document.getElementById('screenViewer');
let buf;
let chunks = []; let count=0;
socket.on('platform_room_message', (data) => {
  if (store.getState().connectInfo.mobileId === '') {
    store.dispatch(setPhoneId(data.from_connection_id));
    store.dispatch(setConnectionStatus(true));
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
      if (i === 0) sendSocketMessage('loading_conversation', { phone: data.data[i].contact_phone });
      // for testing purpose
      // sendSocketMessage('new_message_sent', {
      //   to: data.data[i].contact_phone,
      //   from: store.getState().connectInfo.number,
      //   fromFullName: 'abc',
      //   msg: 'abc',
      //   type: 'chat',
      //   uniqueid: '342342432424sadfasfd',
      //   file_type: ''
      // });
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
  } else if (data.type === 'loading_archive') {
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
    store.dispatch(loadArchiveChatList(chatListDataArray));
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
  } else if (data.type === 'loading_conversation') {
    const conversationListDataArray = [];
    for (let i = 0; i < data.data.length; i++) {
      conversationListDataArray.push({
        date: data.data[i].date,
        file_type: data.data[i].file_type,
        fromFullName: data.data[i].fromFullName,
        status: data.data[i].status,
        fromperson: data.data[i].fromperson,
        msg: data.data[i].msg,
        toperson: data.data[i].toperson,
        type: data.data[i].type,
        uniqueid: data.data[i].uniqueid,
        is_archive: false
      });
    }
    store.dispatch(loadConversationList(conversationListDataArray));
  } else if (data.type === 'loading_groups') {
    store.dispatch(refreshGroupList([]));
    const groupListDataArray = [];
    for (let i = 0; i < data.data.length; i++) {
      groupListDataArray.push({
        date_creation: data.data[i].date_creation,
        group_name: data.data[i].group_name,
        is_mute: data.data[i].is_mute,
        unique_id: data.data[i].unique_id
      });
    }
    store.dispatch(loadGroupList(groupListDataArray));
  } else if (data.type === 'loading_group_members') {
    for (let i = 0; i < data.data.length; i++) {
      store.dispatch(loadGroupMemberList({
        date_joined: data.data[i].date_joined,
        group_id: data.data[i].group_id,
        isAdmin: (data.data[i].isAdmin === '1'),
        phone: data.data[i].phone
      }));
    }
  } else if (data.type === 'mobile_sending_chunk') {
    console.log(data);
    buf = new Uint8ClampedArray(data.data.chunk);
    var imgdata = new Uint8ClampedArray(data.data.chunk);
    console.log('image chunk')
    buf.set(imgdata, count);
    chunks[count] = data.data.chunk;
    count += imgdata.byteLength;
    if (count === buf.byteLength) {
      // we're done: all data chunks have been received
      //renderPhoto(buf);
      var builder = new Blob(chunks, buf.type);
      console.log('full image received');
      store.dispatch(addImage(URL.createObjectURL(builder)));
      screenViewer.src = URL.createObjectURL(builder);
    }
  }
});

socket.on('disconnect', () => {
  console.log('disconnected from socket server');
  store.dispatch(setSocketStatus(true));
});

export function sendSocketMessage(type, data) {
  console.log(`socket message called: ${JSON.stringify(data)}`);
  socket.emit('platform_room_message', {
    phone: store.getState().connectInfo.number,
    from_connection_id: store.getState().connectInfo.id,
    to_connection_id: store.getState().connectInfo.mobileId,
    type,
    data
  });
}
