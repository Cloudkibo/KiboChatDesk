import React from 'react';
import { ButtonToolbar, NavDropdown, MenuItem, Navbar, Nav } from 'react-bootstrap';
import ConvItemSent from './ConvItems/ConvItemSent';
import ConvItemRecv from './ConvItems/ConvItemRecv';
import MessageInfo from '../InfoSideBar/MessageInfo';
import GroupInfo from '../InfoSideBar/GroupInfo';
import { sendSocketMessage } from '../../../socketio.js';

class Conversation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  handleChange(evt) {
    this.setState({
      searchValue: evt.target.value
    });
    console.log(evt.target.value);
  }

  sendMessage() {
    console.log(this.refs.msgText.value);

    //console.log(dialog.showOpenDialog({properties: ['openFile', 'openDirectory', 'multiSelections']}))
    sendSocketMessage('new_message_sent', {
      to: '+923201211991',
      from: this.props.connectInfo.number,
      fromFullName: 'abc', // todo fix this
      msg: this.refs.msgText.value,
      type: 'chat',
      uniqueid: '342342432424sadfasfd',
      file_type: ''
    });
  }

  render() {
    const items = [];
    if (this.state.searchValue === '') {
      for (let i = 0; i < this.props.conversationListInfo.length; i++) {
        if (!this.props.conversationListInfo[i].is_archive) {
          if (this.props.conversationListInfo[i].fromperson ===
            this.props.connectInfo.number) {
              items.push(<ConvItemSent listItemData={this.props.conversationListInfo[i]} key={this.props.conversationListInfo[i].uniqueid} connectInfo={this.props.connectInfo} />);
            } else {
              items.push(<ConvItemRecv listItemData={this.props.conversationListInfo[i]} key={this.props.conversationListInfo[i].uniqueid} connectInfo={this.props.connectInfo} />);
            }
        }
      }
    } else {
      for (let i = 0; i < this.props.conversationListInfo.length; i++) {
        if (!this.props.conversationListInfo[i].is_archive) {
          if (this.props.conversationListInfo[i].msg.includes(this.state.searchValue)) {
            if (this.props.conversationListInfo[i].fromperson ===
              this.props.connectInfo.number) {
                items.push(<ConvItemSent listItemData={this.props.conversationListInfo[i]} key={this.props.conversationListInfo[i].uniqueid} connectInfo={this.props.connectInfo} />);
              } else {
                items.push(<ConvItemRecv listItemData={this.props.conversationListInfo[i]} key={this.props.conversationListInfo[i].uniqueid} connectInfo={this.props.connectInfo} />);
              }
          }
        }
      }
    }

    return (
        <div className="scrollbar-disable">
        <div>
          <div>
          <Navbar>
            <Navbar.Header>
              <img className="pull-left mt1 margin-right-small br-100 ba b--black-10" src={'./public/img/android.png'} alt="DP" width="50" height="50" />
              <Navbar.Brand>
                User Name 2
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavDropdown title="Settings" id="basic-nav-dropdown">
                  <MenuItem eventKey="1">Action</MenuItem>
                  <MenuItem eventKey="2">Another action</MenuItem>
                  <MenuItem eventKey="3">Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="4">Separated link</MenuItem>
                </NavDropdown>
            </Nav>
          </Navbar>
        </div>
          <div className="conv-container scrollbar-enable">
            { items }
          </div>

          <div className="message-input">
          <div className="input-group mb3">
            <input type="text" ref="msgText" className=" form-control" placeholder="Type your message" />
            <span className="input-group-btn">
            <button type="button" className="btn btn-success" onClick={this.sendMessage}>Send</button>
            </span>
          </div>
          </div>

        </div>
        </div>

    );
  }
}

export default Conversation;
