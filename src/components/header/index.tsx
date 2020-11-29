import React, { Component } from 'react'
import './index.scss'
interface Props {

}
interface State {

}

export default class Header extends Component<Props, State> {
  state = {}
  menuHandler() {
    
  }
  render() {
    return (
      <>
        <header className="header">
          <div className="container">
            <div className="navbar">
              <a className="logo">abc</a>
              <i className="menu" onClick={() => this.menuHandler()}></i>
            <div className="collapse">
              <div className="links">
                <ul>
                  <li><a href="">Home</a></li>
                  <li><a href="">RPG</a></li>
                  <li><a href="">Arcade</a></li>
                  <li><a href="">Brain Games</a></li>

                </ul>
              </div>
              <div className="info">
                <div className="info-button">
                  <span className="login">Login</span>
                  <span className="signup">Sign Up</span>
                </div>
                <div className="info-nav">
                  <ul>
                    <li><a>Support</a></li>
                    <li><a>Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </div>
      </header>
      </>
    )
  }
}
