import React from 'react';

class ChatItem extends React.Component {
  render() {
    return (
        <div>
          <img className="pull-left margin-right-small br-100 ba b--black-10" src={'./public/img/android.png'} alt="DP" width="60" height="60" />
            <span className="pull-right ">{this.props.listItemData.date}</span>
            <div>
              <h4>{this.props.listItemData.display_name} </h4>
              <p className="small-text-size">{this.props.listItemData.msg}</p>
              <hr className="ba b--moon-gray" />
            </div>

        </div>
    );
  }
}

export default ChatItem;
