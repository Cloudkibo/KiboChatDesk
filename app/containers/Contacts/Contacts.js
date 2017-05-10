import React from 'react';
import ContactItem from './ContactItem';

class Contacts extends React.Component {

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
    let items = [];
    if (this.state.searchValue === '') {
      for (var i = 0; i < this.props.contactListInfo.length; i++) {
        items.push(<ContactItem item={this.props.contactListInfo[i]} key={this.props.contactListInfo[i].phone} />);
      }
    } else {
      for (var i = 0; i < this.props.contactListInfo.length; i++) {
        //This will work when some data will be sent in contact Item
        if (this.state.searchValue.includes(i)){
          items.push(<ContactItem item={this.props.contactListInfo[i]} key={this.props.contactListInfo[i].phone} />);
        }
      }
    }
    return(
      <div>
        <a href="#" className="pull-left"><i className="fa fa-arrow-left mr4"></i></a>
        <h4 className="tc mt4 mb4">New Chat</h4>
        <input type="text" className="mt4 mb4 form-control" placeholder="Search" onChange={this.handleChange} />
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
