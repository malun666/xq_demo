import React, { Component,Fragment } from 'react'
import Modal from './../modal/index'
import './index.scss'
interface IProps {

}
interface IState {
  isModalShow: boolean;
  menuList:(string)[];
}


export default class Header extends Component<IProps, IState> {
  // export default class Header {
  constructor(props: IProps) {
    super(props)
    this.state = {
      isModalShow: false,    
      menuList:["Home", "RPG", "Arcade", "Brain Games", "Support", "Contact Us"]
    }
  }

  menuHandler(isModalShow: boolean): void {
    this.setState({
      isModalShow: isModalShow
    })
  }
  render() {
    return (
      <Fragment>
        {this.state.isModalShow && <Modal menuHandler={this.menuHandler.bind(this)} isOpen={this.state.isModalShow} menuList={this.state.menuList} />}
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
      </Fragment>
    )
  }
}
