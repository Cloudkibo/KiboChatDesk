import React from 'react';
import ContactItem from '../../Contacts/ContactItem';
import {ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap';

class CreateGroup extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    groupName: ''
  };
  this.handleChange = this.handleChange.bind(this);
  }

  render(){
    var items = [];
    console.log('render function called');

      for (var i = 0; i < 9; i++) {
        items.push(<ContactItem />);
      }


    return(
      <div>
        <div>
          <div>
            <img className="pull-left margin-right-small br-100 ba b--black-10" src={'./public/img/android.png'} alt="DP" width="50" height="50" />
            <div className="mt4 pull-right">
              <button type="button" className="btn btn-default btn-xs">Create</button>
              <div className="btn-group">

              </div>
            </div>
          </div>
          <input type="text" className="mt4 mb4 form-control" placeholder="Enter Group Name" onChange={this.handleChange} />

          <h4 className="p4">Please choose participants: </h4>
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

  handleChange (evt) {
    this.setState({
      searchValue: evt.target.value
    });
    console.log(evt.target.value);
  }

}

export default CreateGroup;
