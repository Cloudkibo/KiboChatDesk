import React from 'react';
import LoginInfo from './LoginInfo'

class DemoComp extends React.Component {
  render(){
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
    )
  }
}

export default DemoComp;
