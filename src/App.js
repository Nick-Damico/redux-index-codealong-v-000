import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo'
import Todos from './components/todos/Todos'

class App extends Component {
  render() {
    return (
      <div style={{border: '1px solid teal', padding: 5}}className="App">
        <CreateTodo store={this.props.store} />
        <Todos store={this.props.store} />
      </div>
    );
  }
}

export default App;
