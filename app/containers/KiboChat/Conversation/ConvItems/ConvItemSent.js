import React from 'react';

class ConvItemSent extends React.Component{
  render(){
    if(true){ //renders if the item is text item
      return(
        <div className="">
          <div className="pull-right">
            <div className="talk-bubble round mr3 ">
              <p className="talktext">
                Outgoing - this is an outgoing message
              </p>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      )
    }
    else{ //renders if the item is attached item
      return(
        <h2>Asad</h2>
      )
    }
  }
}

export default ConvItemSent;
