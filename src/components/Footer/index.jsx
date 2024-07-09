import React, { Component } from 'react';
import '../Footer/index.css';
export default class Footer extends Component {
  render() {
    return (
      <div className="c-todo__footer">
        <div>已完成/0 全部/3</div>
        <button type="button" className="c-footer__delete">
          清除已完成
        </button>
      </div>
    );
  }
}
