//創建外殼元件
/* {Component} 並不是解構賦值，而是react使用具名匯出的形式*/
import React, { Component } from "react";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";

//創建並匯出App元件
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome />
      </div>
    );
  }
}
