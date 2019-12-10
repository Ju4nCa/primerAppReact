import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { todos } from './todos.json';
import Formulario from './components/Formulario.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
    todos
    }
    this.agregar = this.agregar.bind(this);
  }

  agregar(tarea){
    this.setState({
      todos:[...this.state.todos,tarea]
    })
  }

  remove(index){
    this.setState({
      todos: this.state.todos.filter((e, i)=>{
        return i!==index;
      })
    })
  }

  render() {
    const object = this.state.todos.map((todo, i) => {
      return(
        <div className="col md-4" key={i}>
          <div className="card">
            <div className="card-header">
            <h3>{todo.title}</h3>
            <span className="badge badge-pill badge-danger ml-2">
            {todo.prioridad}
            </span>
            </div>
              <div className="card-body">
              <p>{todo.descripcion}</p>
              <p>{todo.responsable}</p>
              <div className="card-footer">
              <button
              className= "btn btn-danger"
              onClick={this.remove.bind(this,i)}
              >Borrar</button>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="App">
      <nav className="navbar-brand">
      <p>Tareas - {this.state.todos.length}</p>
      </nav>
      <div className="container">
          <div className="row md-4 mt-4">
           <div className="card bg-primary shadow p-3 border-success mb-4">
           <img src={logo} className="App-logo card-img-top" alt="logo"/>
           <Formulario onAgregar = {this.agregar}/>
           </div>
          {object}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
