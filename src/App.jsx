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
  //addTodo用於添加一個todo，接收的是todo物件
  addTodo = (todoObj) => {
    //獲取原todos
    const { todos } = this.state;
    //追加一個todo
    const newTodos = [todoObj, ...todos];
    //更新狀態
    this.setState({ todos: newTodos });
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="c-todo">
        <Header addTodo={this.addTodo} />
        <List todos={todos} />
        <Footer />
      </div>
    );
  }
}
