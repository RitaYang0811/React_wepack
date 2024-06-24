import React, { Component } from 'react';
import './index.css';
export default class Item extends Component {
  render() {
    return (
      <li className="c-list__item">
        <input type="checkbox" className="c-list__input" id="xxx" />
        <label htmlFor="xxx" className="c-list__text">
          xxx
        </label>
        <button type="button" className="c-list__delete">
          刪除
        </button>
      </li>
    );
  }
}
