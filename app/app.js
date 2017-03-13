//React libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Import Container component
import DemoComp from './containers/Login/DemoComp';
import Sample from './containers/sample';
import KiboChat from './containers/KiboChat/KiboChat';

class App extends React.Component {
  render () {
    return (
      <KiboChat />
    );
  }
}

// Render to index.html
ReactDOM.render(
  <App />,
  document.getElementById('content')
);
