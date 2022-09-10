import React, { Component } from "react";
import "./Holder.css";
import List from "./List";
export default class Holder extends Component {
  render() {
    const props = this.props;
    const { todos } = props;
    let ans = [];
    for (let i = 0; i < todos.length; i++) {
      ans.push(<List todo={todos[i]} />);
    }
    return <div className="Holder">{ans}</div>;
  }
}
