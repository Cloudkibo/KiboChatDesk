import React from 'react';
import LoginInfo from './LoginInfo';

class DemoComp extends React.Component {

  componentDidMount() {
        console.log('component did mount called in DemoComp.js');

        this.props.socket.on('connect', () => {
          console.log('connected to socket server');
          const data = {
            phone: '+923323800399'
          };
          this.props.socket.emit('join_platform_room', data);
        });

        this.props.socket.on('disconnect', () => {
          console.log('disconnected from socket server');
        });

        this.props.socket.on('joined_platform_room', (data) => {
          console.log(`joined platform room: ${data}`);
        });

        this.props.socket.on('platform_room_message', (data) => {
          console.log(`got message from mobile: ${JSON.stringify(data)}`);
        });
  }

  render() {
    return (
      <div className="container-background">
        <div className="container-background-up">
          <br />
        </div>
        <div className="container-background-down">
          <LoginInfo />
          <br />
        </div>
      </div>
    );
  }
}

export default DemoComp;
