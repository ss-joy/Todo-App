import React, { Component } from "react";
import "./List.css";
export default class List extends Component {
  render() {
    return <div className="List">{this.props.todo}</div>;
  }
}
