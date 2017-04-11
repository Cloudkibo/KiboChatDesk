import React from 'react';
import ChatItem from './ChatItem';
import {ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap';

class ChatList extends React.Component {
  render(){
    var items = [];
    for (var i = 0; i < 9; i++) {
      items.push(<ChatItem />);
    }
    return(
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
          <input type="text" className="mt4 mb4 form-control" placeholder="Search" />
        </div>
        <div className="scrollbar-enable">
          <ul className="list-unstyled pr5">
                <li className="">
                  {items}
                </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ChatList;
