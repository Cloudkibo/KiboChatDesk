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
            </div>
          </div>
          <div className="clearfix" />
        </div>
      );
    }
  }
}

export default ConvItemSent;
