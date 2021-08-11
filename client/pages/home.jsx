import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: null
    };
  }

  componentDidMount() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(todos => {
        this.setState({
          todos: todos
        });
      });
  }

  render() {
    const { todos } = this.state;

    if (!todos) {
      return <p>Loading...</p>;
    }

    return (
      <div className="container mt-4">
        <h1 className="text-center mb-4">My To Do Items</h1>
        <ul className="list-group">
          {
            todos.length
              ? todos.map(t => (
                <li key={t.todoId} className="list-group-item">
                  <h5>{t.name}</h5>
                  <p>{t.details}</p>
                </li>
              ))
              : (
                  <li className="list-group-item">
                    <h4 className="text-center">No To Do Items</h4>
                  </li>
                )
          }
        </ul>
      </div>
    );
  }
}
