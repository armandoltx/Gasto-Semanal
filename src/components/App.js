import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import '../css/App.css';

class App extends Component {

  // crear un state inicial con constructor o sin el:
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     presupuesto: '',
  //     gastos: {},
  //     restante: '',
  //   }
  // }
    state = {
      presupuesto: '',
      gastos: {},
      restante: '',
    }


  // Agregar el gasto al state
  agregarGasto = (gasto) =>{
    console.log("dentro de app ", gasto);

    //Hacer una copia del state actual
    const gastos = {...this.state.gastos};

    // Agregar el gasto al objeto del state
    gastos[`gasto${Date.now()}`] = gasto;
    //console.log(gastos);

    // ponerlo en el state

    this.setState({
      gastos: gastos,
    });
   }

  render() {
    return (
      <div className="App container">
        <Header titulo="Gasto Semanal" />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Formulario agregarGasto={this.agregarGasto} />
            </div>
            <div className="one-half column">
              <Listado />
            </div>
          </div>
        </div>
      
      </div>
    );
  }
}

export default App;
