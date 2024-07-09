import React, { Component } from 'react';
import './index.css';
export default class Item extends Component {
  render() {
    const { id, name, done } = this.props;
    return (
      <li className="c-list__item">
        <input
          type="checkbox"
          className="c-list__input"
          id={id}
          defaultChecked={done}
        />
        <label htmlFor={id} className="c-list__text">
          {name}
        </label>
        <button type="button" className="c-list__delete">
          刪除
        </button>
      </li>
    );
  }
}
