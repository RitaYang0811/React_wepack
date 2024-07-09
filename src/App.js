import React, { Component } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/List';
import './App.css';
export default class App extends Component {
  state = {
    //初始化狀態
    todos: [
      { id: '001', name: '吃飯', done: true },
      { id: '002', name: '睡覺', done: true },
      { id: '003', name: '寫程式', done: false },
    ],
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="c-todo">
        <Header />
        <List todos={todos} />
        <Footer />
      </div>
    );
  }
}
