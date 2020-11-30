import React, { Component } from 'react'
import './index.scss'
interface IProps {
  className: string;
  style: object;
}
interface IState {

}

export default class Card extends Component<IProps, IState> {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    const { style, className } = this.props

    return (
      <div className={`card ${className}`} style={{ ...style }}>
        {this.props.children}
      </div>

    )
  }
}
