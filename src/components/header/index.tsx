import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Modal from './../modal/index'
import {loadNavBarAsync} from './../../actions'
import './index.scss'
interface IProps {
  navbarReducer: (string)[],
  loadNavBar: () => {}
}
interface IState {
  isModalShow: boolean;
}


class Header extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      isModalShow: false
    }
  }

  menuHandler(isModalShow: boolean): void {
    this.setState({
      isModalShow: isModalShow
    })
  }
   componentDidMount(){
    this.props.loadNavBar()
  }
  render() {
    return (
      <Fragment>
        {this.state.isModalShow && <Modal menuHandler={this.menuHandler.bind(this)} isOpen={this.state.isModalShow} menuList={this.props.navbarReducer} />}
        <header className="header">
          <div className="container">
            <div className="navbar">
              <a className="logo"></a>
              <i className="menu" onClick={() => this.menuHandler(true)}></i>
              <div className="collapse">
                <div className="links">
                  <ul>
                    {/* <li><a href="">Home</a></li>
                    <li><a href="">RPG</a></li>
                    <li><a href="">Arcade</a></li>
                    <li><a href="">Brain Games</a></li> */}
                    {this.props.navbarReducer.map(val => {
                      return <li key={val}><a href="">{val}</a></li>
                    })}

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
const mapStateToProps = (state) => ({
  navbarReducer: state.navbarReducer
})

const mapDispatchToProps = (dispatch) => {
  return {
    loadNavBar: () => {
      return dispatch(loadNavBarAsync())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)