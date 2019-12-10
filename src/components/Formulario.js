import React, {Component} from 'react';


class Formulario extends Component{
  constructor() {
    super();
    this.state = {
      titulo:'',
      responsable:'',
      descripcion:'',
      prioridad:'low'
    }
    this.escribir=this.escribir.bind(this);
    this.enviar=this.enviar.bind(this);
  }

escribir(e){
  const {value, name}=e.target;
  this.setState({
    [name]:value
  })

}

enviar(e){
  e.preventDefault();
  this.props.onAgregar(this.state);
  console.log("Enviando..");
}
  render(){
    return (
    <div className="card">
      <form className="card-body" onSubmit={this.enviar}>
        <div className="form-group">
        <input
          type="text"
          name="title"
          className="form-control"
          placeholder="Title"
          onChange={this.escribir}
        />
        </div>
        <div className="form-group">
        <input
          type="text"
          name="responsable"
          className="form-control"
          placeholder="Responsable"
          onChange={this.escribir}/>
        </div>
        <div className="form-group">
        <input
          type="text"
          name="descripcion"
          className="form-control"
          placeholder="Descripcion"
          onChange={this.escribir}/>
        </div>
        <div className="form-group">
        <select
        name="prioridad"
        className="form-control"
        onChange={this.escribir}
        >
        <option>low</option>
        <option>medium</option>
        <option>high</option>
        </select>
        </div>
        <div className="form-group">
        <button
          type="submit"
          name="save"
          className="btn btn-primary"
          value="Save">
          Save
          </button>
        </div>
      </form>
    </div>
    );
  }
}

export default Formulario
