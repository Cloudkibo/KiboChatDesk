import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';
import React from 'react';
import ChatItem from './ChatItem';

class ChatList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      searchValue: evt.target.value
    });
    console.log(evt.target.value);
  }

  render() {
    const items = [];
    if (this.state.searchValue === '') {
      for (let i = 0; i < this.props.chatListData.length; i++) {
        items.push(<ChatItem listItemData={this.props.chatListData[i]} key={i} />);
      }
    } else {
      for (let i = 0; i < this.props.chatListData.length; i++) {
        if (this.props.chatListData[i].display_name.includes(this.state.searchValue)) {
          items.push(<ChatItem listItemData={this.props.chatListData[i]} key={i} />);
        }
      }
    }


    return (
      <div>
        <div>
          <div>
            <img className="pull-left margin-right-small br-100 ba b--black-10" src={'./public/img/android.png'} alt="DP" width="50" height="50" />
            <div className="mt4 pull-right">
              <button type="button" className="btn btn-default btn-xs">New Chat</button>
              <div className="btn-group">
                <ButtonToolbar>
                  <DropdownButton bsSize="xsmall" title="" id="dropdown-size-extra-small">
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem eventKey="3">Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4">Separated link</MenuItem>
                  </DropdownButton>
                </ButtonToolbar>
              </div>
            </div>
          </div>
          <input type="text" className="mt4 mb4 form-control" placeholder="Search" onChange={this.handleChange} />
        </div>
        <div className="scrollbar-enable">
          <ul className="list-unstyled pr5">
                <li className="">
                  {items}
                </li>
          </ul>
        </div>
      </div>
    );
  }

}

export default ChatList;
