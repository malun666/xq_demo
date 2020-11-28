import React, { Component, Fragment } from 'react'
import './test.scss';
export interface AppProps { compiler: string; framework: string; }
export default class App extends Component<AppProps,unknown> {
  render() {
    return (
      <Fragment>
        <div className='test'>hellow{this.props.compiler} and {this.props.framework}!</div>
      </Fragment>
    )
  }
}
