import React from 'react';
import ContactItem from './ContactItem';

class Contacts extends React.Component{
  render(){
    var items = [];
    for (var i = 0; i < 9; i++) {
      items.push(<ContactItem />);
    }
    return(
      <div>
        <a href="#" className="pull-left"><i className="fa fa-arrow-left mr4"></i></a>
        <h4 className="tc mt4 mb4">New Chat</h4>
        <input type="text" className="mt4 mb4 form-control" placeholder="Search" />
        <div className="scrollbar-enable">
          <ul className="list-unstyled">
                <li className="">
                  {items}
                </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Contacts;
