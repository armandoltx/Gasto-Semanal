import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {

  // refs para los campos del formulario

  nombreGasto = React.createRef();
  cantidadGasto = React.createRef();


  crearGasto = (e) => {
    // 1. Prevenir default
    e.preventDefault();
    console.log("Dentro de crearGasto");

    // 2. Crear el Objeto con los datos
    //console.log("nombreGasto ", this.nombreGasto.current.value);
     const gasto = {
       nombreGasto: this.nombreGasto.current.value,
       cantidadGasto: this.cantidadGasto.current.value,
     }
     // console.log("gasto ", gasto);

    // 3. Agregarlo y enviarlo por props
    this.props.agregarGasto(gasto);

    // 4. Resetear el formulario
    e.currentTarget.reset();
  }

  render () {
    return (
      <form onSubmit={this.crearGasto}>
        <h2>Agrega tus datos aqui</h2>
        <div className="campo">
          <label>Nombre Gasto</label>
          <input className="u-full-width" type="text" placeholder="Ej. Transporte" ref={this.nombreGasto} />
        </div>

        <div className="campo">
          <label>Cantidad</label>
          <input className="u-full-width" type="text" placeholder="Ej. 300" ref={this.cantidadGasto} />
        </div>

        <input type="submit" className="button-primary u-full-width" value="Agregar" />
      </form>
    );
  }
}

Formulario.propTypes = {
  crearGasto: PropTypes.func.isRequired,
  

}

export default Formulario;


