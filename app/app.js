//React libraries
import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

//Import Container component
import DemoComp from './containers/Login/DemoComp';
import Sample from './containers/sample';
import KiboChat from './containers/KiboChat/KiboChat';

const socket = io('https://api.cloudkibo.com');

class App extends React.Component {

  componentDidMount() {
        socket.connect();
        console.log('component did mount called in app.js');

        socket.on('connect', () => {
          console.log('connected to socket server');
        });

        socket.on('disconnect', () => {
          console.log('disconnected from socket server');
        });
  }

  render() {
    return (
      <DemoComp socket={socket} />
    );
  }
}

// Render to index.html
ReactDOM.render(
  <App />,
  document.getElementById('content')
);
