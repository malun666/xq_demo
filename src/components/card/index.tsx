import { url } from 'inspector'
import React, { Component } from 'react'
import './index.scss'
interface Props {

}
interface State {

}

// export default class Card extends Component<Props, State> {
export default class Card extends Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  // require('./../body/imgs/11.png')
  render() {
    const { style, className } = this.props

    return (
      <div className={`card ${className}`} style={{ ...style }}>
        {this.props.children}
      </div>

    )
  }
}
