import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import '../Header/index.css';

export default class Header extends Component {
  handelKeyUp = (event) => {
    //解構復職
    const { keyCode, target } = event;
    //判斷是否為enter
    if (keyCode !== 13) return;
    //todo不能為空
    if (target.value.trim() === '') {
      alert('輸入不能為空');
      return;
    }
    //準備好一個todoObj
    const todoObj = {
      id: nanoid(),
      name: target.value,
      done: false,
    };
    //將todoObj傳遞給App
    this.props.addTodo(todoObj);
    target.value = '';
  };
  render() {
    return (
      <div className="c-todo__header">
        <div className="c-todo__title">今天要做什麼呢？</div>
        <div className="c-todo__action">
          <input
            onKeyUp={this.handelKeyUp}
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
