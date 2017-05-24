import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ChatList from './ChatList/ChatList';
import Conversation from './Conversation/Conversation';
import Contacts from '../Contacts/Contacts';
import CreateGroup from './CreateGroup/CreateGroup';

class KiboChat extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {

  }

  render() {
    return (
    <div className="scrollbar-disable">
      <div className="col-md-4">
        {
          (this.props.chatListInfo.length > 0) &&
          <ChatList chatListData={this.props.chatListInfo} />
        }
        {/*<CreateGroup />*/}
        {
          //(this.props.contactListInfo.length > 0) &&
          //<Contacts contactListInfo={this.props.contactListInfo} />
        }
      </div>
      <div className="col-md-8">
        <Conversation conversationListInfo={this.props.conversationListInfo} connectInfo={this.props.connectInfo} />
      </div>
    </div>
  );
  }
}

function mapStateToProps(state) {
  //console.log(state);
  return {
    connectInfo: (state.connectInfo),
    chatListInfo: (state.chatListInfo),
    contactListInfo: (state.contactListInfo),
    conversationListInfo: (state.conversationListInfo)
  };
}

function mapDispatchToProps(dispatch) {
  // todo do this later
  return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(KiboChat);
