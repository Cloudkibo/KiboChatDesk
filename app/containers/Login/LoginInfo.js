import React from 'react';

class LoginInfo extends React.Component {
  render(){
    return(
      <div className="login shadow-1">
        <div className="login-up">
          <input type="number" className="input-shadow input-number-position h2 f4" />
          <div className="fr">
            <h2 className="f3 normal">KiboChat Desktop</h2>
            <p>Use your KiboChat mobile number to login</p>
            <br />
            <input type="checkbox" value="Keep me signed in" />
            <br />
            <p className="small-text-size">To reduce mobile data usage, please connect your phone to wifi</p>
          </div>
        </div>
        <div className="login-bottom">
          <div className="inline-block-wrapper">
              <span className="icon-position">
                <img src={'./public/img/android.png'} alt="android-icon" width="60" height="60" />
              </span>
              <span className="ic-text-desc">
                <p>Open KiboChat -> Menu -> KiboChat Desktop</p>
              </span>
          </div>
          <div className="inline-block-wrapper-right">
              <span className="icon-position">
                <img src={'./public/img/iphone.png'} alt="android-icon" width="60" height="60" />
              </span>
              <span className="ic-text-desc">
                <p>Open KiboChat -> Settings -> KiboChat Desktop</p>
              </span>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginInfo;
