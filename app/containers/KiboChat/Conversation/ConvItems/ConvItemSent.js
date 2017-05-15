import React from 'react';

class ConvItemSent extends React.Component {
  render() {
    if (this.props.listItemData.type === 'chat') { //renders if the item is text item
      return (
        <div className="">
          <div className="pull-right">
            <div className="talk-bubble round mr3 ">
              <p className="talktext">
                { this.props.listItemData.msg }
              </p>
            </div>
          </div>
          <div className="clearfix" />
        </div>
      );
    } else { //renders if the item is attached item
      return (
        <div className="">
          <div className="pull-right">
            <div className="talk-bubble round mr3 ">
              <p className="talktext">
                Attachment { this.props.listItemData.type }
              </p>
              <img className="br-100 ba b--black-10" src={this.props.connectInfo.image} alt="DP" width="100" height="100" />
              <audio controls>
              <source src={this.props.connectInfo.audio} type="audio/ogg" />
              <source src={this.props.connectInfo.audio} type="audio/mpeg" />
              </audio>
              <div className="text-center">
                <button type="button" className="mt4 dim br-pill ph3 pv2 mb2 dib white bg-light-silver f6">Download Attachment</button>
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </div>
      );
    }
  }
}

export default ConvItemSent;
