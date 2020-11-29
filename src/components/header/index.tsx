import React, { Component } from 'react'
import Modal from './../modal/index'
import './index.scss'
interface Props {

}
interface IState {
  isModalShow: boolean;
}

export default class Header extends Component<any, IState> {
  // export default class Header {
  constructor(props: any) {
    super(props)
    this.state = {
      isModalShow: false
    }
  }
  menuHandler(isShow) {
    this.setState({
      isModalShow: isShow
    })
  }
  render() {
    return (
      <>
        {this.state.isModalShow && <Modal menuHandler={this.menuHandler.bind(this)} isOpen={this.state.isModalShow} menuList={["Home", "RPG", "Arcade", "Brain Games", "Support", "Contact Us"]} />}
        <header className="header">
          <div className="container">
            <div className="navbar">
              <a className="logo"></a>
              <i className="menu" onClick={() => this.menuHandler(true)}></i>
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
