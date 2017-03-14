import React from 'react';
import ChatList from './ChatList/ChatList';
import Conversation from './Conversation/Conversation';
import Contacts from '../Contacts/Contacts';

class KiboChat extends React.Component {
  render(){
    return(
    <div className="scrollbar-disable">
      <div className="col-md-4">
        <ChatList />
      </div>
      <div className="col-md-8">
        <Conversation />
      </div>
    </div>
    )
  }
}

export default KiboChat;
