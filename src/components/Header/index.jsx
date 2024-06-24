import React, { Component } from 'react';
import '../Header/index.css';
export default class Header extends Component {
  render() {
    return (
      <div className="c-todo__header">
        <div className="c-todo__title">今天要做什麼呢？</div>
        <div className="c-todo__action">
          <input
            type="text"
            className="c-todo__input"
            placeholder="請輸入代辦事項"
          />
          <button type="button" className="c-todo__btn">
            確認
          </button>
        </div>
      </div>
    );
  }
}
