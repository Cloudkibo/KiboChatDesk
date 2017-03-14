import React from 'react';
import {ButtonToolbar, NavDropdown, MenuItem, Navbar, Nav } from 'react-bootstrap';
import ConvItemSent from './ConvItems/ConvItemSent';
import ConvItemRecv from './ConvItems/ConvItemRecv';
import MessageInfo from '../InfoSideBar/MessageInfo';
import GroupInfo from '../InfoSideBar/GroupInfo';

class Conversation extends React.Component {
  render(){
      if(false){ //check the true variable if message or group info is clicked
      return(
        <div className="scrollbar-disable">
        <div className="col-md-8">
          <div>
          <Navbar>
            <Navbar.Header>
              <img className="pull-left mt1 margin-right-small br-100 ba b--black-10" src={'./public/img/android.png'} alt="DP" width="50" height="50" />
              <Navbar.Brand>
                User Name
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

          <div className=" scrollbar-enable">
            {/* put logic to check if the message is incoming or outgoing */ }
            <ConvItemSent />
            <ConvItemRecv />
            <ConvItemSent />
            <ConvItemRecv />
            <ConvItemRecv />
            <ConvItemRecv />
            <ConvItemRecv />
            <ConvItemRecv />
            <ConvItemSent />
          </div>

          <div className="message-input">
          <div className="input-group mb3">
            <input type="text" className=" form-control" placeholder="Type your message" />
            <span className="input-group-btn">
            <button type="button" className="btn btn-success">Send</button>
            </span>
          </div>
          </div>

        </div>
          <div className="col-md-4">
            {/* put logic to check if the message info is clicked or group info is clicked */ }
            <MessageInfo />
          </div>
        </div>
      )
    }
    else{
      return(

          <div className="scrollbar-disable">
          <div>
            <div>
            <Navbar>
              <Navbar.Header>
                <img className="pull-left mt1 margin-right-small br-100 ba b--black-10" src={'./public/img/android.png'} alt="DP" width="50" height="50" />
                <Navbar.Brand>
                  User Name
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
              {/* put logic to check if the message is incoming or outgoing */ }
              <ConvItemSent />
              <ConvItemRecv />
              <ConvItemSent />
              <ConvItemRecv />
              <ConvItemRecv />
              <ConvItemRecv />
              <ConvItemRecv />
              <ConvItemRecv />
              <ConvItemSent />
            </div>

            <div className="message-input">
            <div className="input-group mb3">
              <input type="text" className=" form-control" placeholder="Type your message" />
              <span className="input-group-btn">
              <button type="button" className="btn btn-success">Send</button>
              </span>
            </div>
            </div>

          </div>
          </div>

      )
    }
  }
}

export default Conversation;
