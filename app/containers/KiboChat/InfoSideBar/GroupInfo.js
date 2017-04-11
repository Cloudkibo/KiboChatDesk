import React from 'react';
import ContactItem from '../../Contacts/ContactItem';

class GroupInfo extends React.Component{
  render(){
    var items = [];
    for (var i = 0; i < 5; i++) {
      items.push(<ContactItem />);
    }
    return(
      <div>
        <div>
          <a href="#" className="pull-left"><i className="fa fa-arrow-left mr4"></i></a>
          <h4 className="tc mt4">Group Info</h4>
          <hr className="ba b--moon-gray mb5" />
        </div>
        <div>
          <div className=" tc">
            <img className="br-100 dib pa2" src={'./public/img/android.png'} alt="DP" width="150" height="150" align="middle" />
          </div>
          <h5 className="">Group Name</h5>
        </div>

        <hr className="ba b--moon-gray mb5" />

        <h4>Settings</h4>

        <div style={{marginTop:'30px', height:'325px'}} className="scrollbar-enable">
          {items}
        </div>
        <div className="text-center">
          <button type="button" className="mt4 dim br-pill ph3 pv2 mb2 dib white bg-dark-green">Leave Group</button>
        </div>
      </div>
    )
  }
}

export default GroupInfo;
