import React, { Component } from 'react'
import AddTodo from './AddTodo';
import Todos from './Todos'

export class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'Buy some milk' },
      { id: 2, content: 'Play guitar' }
    ]
  }
  deleteTodo = (id) => {
    // console.log(id)
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos })
  }
  addTodo = (todo) => {
    console.log(todo)
    todo.id = Math.random();
    const todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App
