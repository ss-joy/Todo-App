import React, { Component } from "react";
import "./App.css";
import Holder from "./Holder";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inVlue: "",
      todos: ["sleep", "give up smoking"],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      inVlue: e.target.value,
    });
  }
  addTodo = (e) => {
    e.preventDefault();
    this.setState({ inVlue: "" });
    this.setState({
      todos: [...this.state.todos, this.state.inVlue],
    });
  };
  render() {
    return (
      <div className="App">
        <Holder todos={this.state.todos} />
        <form onSubmit={this.addTodo}>
          <div>
            <label htmlFor="todo">Enter new job</label>
            <input
              value={this.state.inVlue}
              onChange={this.handleChange}
              type="text"
              id="todo"
            />
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
