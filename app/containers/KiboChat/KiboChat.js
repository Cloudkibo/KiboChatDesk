import React from 'react';
import ChatList from './ChatList/ChatList';
import Conversation from './Conversation/Conversation';
import Contacts from '../Contacts/Contacts';
import CreateGroup from './CreateGroup/CreateGroup';

class KiboChat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chatListData: {},
      visible: false
    };
  }

  componentDidMount() {

  }


  render() {
    return (
    <div className="scrollbar-disable">
      <div className="col-md-4">
        {
          this.state.visible &&
          <ChatList chatListData={this.state.chatListData} />
        }
        {/*<CreateGroup />*/}
        {/*<Contacts />*/}
      </div>
      <div className="col-md-8">
        <Conversation />
      </div>
    </div>
  );
  }
}

export default KiboChat;
