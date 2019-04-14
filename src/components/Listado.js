import React, {Component} from 'react';

class Listado extends Component {

  render () {
    return(
      <div className="gastos-realizados">
        <h2>Listado</h2>
        {console.log("Desde Listado ", this.props.gastos)}
      </div>
    );
  }
}

export default Listado;