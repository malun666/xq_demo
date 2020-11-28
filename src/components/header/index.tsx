import React, { Component } from 'react'
import './index.scss'
interface Props {

}
interface State {

}

export default class Header extends Component<Props, State> {
  state = {}

  render() {
    return (
      <header className='header'>
        <div className="header-inner">
          <div className="logo">
            <a href='#'>
              <div className='navbar-logo'></div>
            </a>
          </div>
          <div className="navbar">
            <ul>
              <li>Home</li>
              <li>RPG</li>
              <li>Arcade</li>
              <li>Brain Games</li>
            </ul>
          </div>
          <div className="info-right">
            <div className="info-right-button">
              <span className="login">Login</span>
              <span className="signup">Sign Up</span>
            </div>
            <div className="info-right-nav">
              <ul>
                <li>Support</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
