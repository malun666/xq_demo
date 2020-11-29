import React, { Component,Fragment } from 'react'
import './home.scss'
import Header from './../components/header' 
import Body from './../components/body'
import Footer from './../components/footer'
export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </Fragment>
    )
  }
}
