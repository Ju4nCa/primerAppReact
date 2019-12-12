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
        <div className="col-3 md-4 mt-4 text-center" key={i}>
          <div className="card border-success">
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
      <div className="container float-center">
           <div className="
           card float-left sticky-top
           shadow-lg p-3 border-success mt-4 mr-4">
           <p className="badge text-center">Tareas - {this.state.todos.length}</p>
           <img src={logo} className="App-logo card-img-top w-75 h-75 mx-auto" alt="logo"/>
           <Formulario onAgregar = {this.agregar}/>
           </div>
           <div className="row md-4">
             {object}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
