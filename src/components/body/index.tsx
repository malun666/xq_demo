// import { url } from 'inspector';
import React, { Component } from 'react';
import Card from './../card';
import './index.scss';
// interface Props {}
// interface State {}

// export default class Body extends Component<Props, State> {
export default class Body extends Component<any, any> {
  // state = {}

  render() {
    return (
      <div className="body">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Card className="row-1" style={{ height: '30rem', backgroundImage: `url('./img/11.png')` }}>
                <div style={{ fontSize: '3rem' }}>
                  PLAY
                  <br />
                  WIN
                  <br />
                  EXCITE
                </div>
                <div>
                  <span>Get Started!</span>
                </div>
              </Card>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="row">
                <Card
                  className="col-lg-6 col-md-6 col-sm-12"
                  style={{ height: '14.5rem', backgroundImage: `url('./img/12.png')` }}
                ></Card>
                <Card
                  className="col-lg-6 col-md-6 col-sm-12"
                  style={{ height: '14.5rem', backgroundImage: `url('./img/13.png')` }}
                ></Card>
              </div>
              <div className="row">
                <Card
                  className="col-lg-6 col-md-6 col-sm-12"
                  style={{ height: '14.5rem', backgroundImage: `url('./img/14.png')` }}
                ></Card>
                <Card
                  className="col-lg-6 col-md-6 col-sm-12"
                  style={{ height: '14.5rem', backgroundImage: `url('./img/15.png')` }}
                ></Card>
              </div>
            </div>
          </div>
          <div className="row">
            <Card
              className="row-2 col-lg-6 col-md-6 col-sm-12"
              style={{ height: '14.5rem', backgroundImage: `url('./img/21.png')` }}
            >
              <div>
                <span>LIVE GAMES</span>
                <br />
                <span>WITH FRIENDS</span>
              </div>
              <span className="row-explore">EXPLORE &gt;</span>
            </Card>
            <Card
              className="col-lg-3 col-md-3 col-sm-12"
              style={{ height: '14.5rem', backgroundImage: `url('./img/22.png')` }}
            ></Card>
            <Card
              className="col-lg-3 col-md-3 col-sm-12"
              style={{ height: '14.5rem', backgroundImage: `url('./img/23.png')` }}
            ></Card>
          </div>
          <div className="row">
            <Card
              className="col-lg-3 col-md-3 col-sm-12"
              style={{ height: '14.5rem', backgroundImage: `url('./img/31.png')` }}
            ></Card>
            <Card
              className="col-lg-3 col-md-3 col-sm-12"
              style={{ height: '14.5rem', backgroundImage: `url('./img/32.png')` }}
            ></Card>
            <Card
              className="col-lg-6 col-md-6 col-sm-12"
              style={{ height: '14.5rem', backgroundImage: `url('./img/33.png')` }}
            ></Card>
          </div>
        </div>
      </div>
    );
  }
}
