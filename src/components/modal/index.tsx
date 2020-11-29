import React, { Component, Props, MouseEvent, ReactNode, Fragment } from 'react'
import PropTypes from 'prop-types'

import './index.scss';

interface IProps {
  menuHandler?:Function;
  className?: string;
  menuList?: (string)[];
  isOpen?: boolean;
}
interface IState {
  isStateOpen: boolean
}

export default class Modal extends Component<IProps, IState> {
  containerDom: React.RefObject<unknown>;
  constructor(props: IProps) {
    super(props)
    this.state = {
      isStateOpen: props.isOpen || false,

    }
  }
  onClose() {
    this.props.menuHandler(false)
  }
  render() {
    const { isOpen, menuList, className } = this.props;
    return (
      <Fragment>
        {this.state.isStateOpen &&
          <div className={`modal-container ${className}`}>
            <div className="header">
              <a href="#"></a>
              <i onClick={() => this.onClose()}></i>
            </div>
            <div className="buttons">
              <span>Login</span>
              <span className="signup">Sign Up</span>
            </div>
            <div className="content">
              <ul>
                {menuList && menuList.map(item => {
                  return <li key={item}><a href="#">{item}</a></li>
                })}
              </ul>
            </div>
          </div>}
      </Fragment>
    )
  }
}


