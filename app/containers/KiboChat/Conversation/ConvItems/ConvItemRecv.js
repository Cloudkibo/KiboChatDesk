import React from 'react';

class ConvItemRecv extends React.Component {
  render() {
    if (this.props.listItemData.type === 'chat') { //renders if the item is text item
      return (
        <div className="">
          <div className="">
            <div className="talk-bubble round ml3">
              <p className="talktext">
                { this.props.listItemData.msg }
              </p>
            </div>
          </div>
        </div>
      )
    } else { //renders if the item is attached item
      if(true){
        {/*here we'll filter the attachments on the basis of image, attached file */}
        return(
          <div>
            <div className="tc talk-bubble round ml3">
              <img className="br-100 ba b--black-10" src={'./public/img/android.png'} alt="DP" width="100" height="100" />
              <div className="text-center">
                <button type="button" className="mt4 dim br-pill ph3 pv2 mb2 dib white bg-light-silver f6">Download Attachment</button>
              </div>
            </div>
          </div>
        )
      }
      else {
        return (
          <div>
            <div className="tc talk-bubble round ml3">

            </div>
          </div>
        )
      }
    }
  }
}

export default ConvItemRecv;
