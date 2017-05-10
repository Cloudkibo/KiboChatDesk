import React from 'react';

class ContactItem extends React.Component{
  render(){
    return(
      <div>
        <img className="pull-left margin-right-small br-100 ba b--black-10" src={'./public/img/android.png'} alt="DP" width="60" height="60" />
          <div>
            <h4>{this.props.item.display_name} </h4>
            <h6>{this.props.item.phone} </h6>
            <br />
            <hr className="ba b--moon-gray" />
          </div>

      </div>
    )
  }
}

export default ContactItem;
