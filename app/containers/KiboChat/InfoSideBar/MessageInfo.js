import React from 'react';
import ConvItemSent from '../Conversation/ConvItems/ConvItemSent';

class MessageInfo extends React.Component{
  render(){
    return(
      <div>
        <a href="#" className="pull-left"><i className="fa fa-arrow-left mr4"></i></a>
        <h4 className="tc mt4 mb5">Message Info</h4>
        <div style={{height:'100px', width:'297px'}} >
          <ConvItemSent />
        </div>

        <div className="info-box">
          <p>Message Status comes here</p>
          <hr className="ba b--moon-gray" />
          <p>Time comes here</p>
        </div>
      </div>

    )
  }
}

export default MessageInfo;
