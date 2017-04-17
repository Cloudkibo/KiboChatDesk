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
        console.log('component did mount called in DemoComp.js');

        this.props.socket.on('connect', () => {
          console.log('connected to socket server');
          const data = {
            phone: '+923341366328'
          };
          this.props.socket.emit('join_platform_room', data);
        });

        this.props.socket.on('disconnect', () => {
          console.log('disconnected from socket server');
        });

        this.props.socket.on('joined_platform_room', (data) => {
          console.log('debug line called');
          console.log(`joined platform room: ${data}`);
        });

        this.props.socket.on('platform_room_message', (data) => {
          console.log(data);
          if (data.type === 'loading_chatlist') {
            this.setState({
              chatListData: data,
              visible: true
            });
          }
          console.log('printing chatList');
          console.log(this.state.chatListData);
        });
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
      </div>
      <div className="col-md-8">
        <Conversation />
      </div>
    </div>
  );
  }
}

export default KiboChat;
