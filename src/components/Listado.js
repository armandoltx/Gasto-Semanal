import React, {Component} from 'react';
import Gasto from './Gasto';

class Listado extends Component {

  render () {
    return(
      <div className="gastos-realizados">
        <h2>Listado</h2>
        {console.log("Desde Listado ", this.props.gastos)}
        {Object.keys(this.props.gastos).map((key) => (
          //{/* console.log("key => ", key) */}
          //{/* console.log("desde dentro del objeto ", this.props.gastos[key]) */}
          <Gasto
            key={key}
            gasto={this.props.gastos[key]}
          />
        ))}
      </div>
    );
  }
}

export default Listado;