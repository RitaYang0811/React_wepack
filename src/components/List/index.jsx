import React, { Component } from 'react';
import Item from '../Item';
import './index.css';
export default class List extends Component {
  render() {
    return (
      <ul className="c-list">
        <Item />
        <Item />
        <Item />
      </ul>
    );
  }
}
