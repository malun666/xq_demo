import React, { Component } from 'react';
import './index.scss';
interface IProps {
  className: string;
  style: Record<string, unknown>;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IState {}
export default class Card extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  render(): JSX.Element {
    const { style, className } = this.props;

    return (
      <div className={`card ${className}`} style={{ ...style }}>
        {this.props.children}
      </div>
    );
  }
}
