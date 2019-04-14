import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import ControlPresupuesto from './ControlPresupuesto';
import '../css/App.css';
import { validarPresupuesto } from '../helper';

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

    componentDidMount() {
      //console.log("dentro de componentDidMount");
      this.obtenerPresupuesto();
    }


    obtenerPresupuesto = () => {
      let presupuesto = prompt('Cual es el presupuesto');

      let resultado = validarPresupuesto(presupuesto);

      if(resultado) {
        this.setState ({
          presupuesto: presupuesto,
          restante: presupuesto,
        })
      } else {
        this.obtenerPresupuesto();
      }
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
              <Listado gastos={this.state.gastos}/>
              <ControlPresupuesto
                presupuesto={this.state.presupuesto}
                restante={this.state.restante}
              />
            </div>
          </div>
        </div>
      
      </div>
    );
  }
}

export default App;
