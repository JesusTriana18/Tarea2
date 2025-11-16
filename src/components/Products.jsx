import React from 'react'
import PropTypes from 'prop-types'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function Products({ productosLista, agregar }) {
  return (
    <div className="ProductsContainer">
      <span className="Text">Ofertas limitadas</span>
      <Table striped bordered hover size="sm" className="TableFull">
        <thead>
          <tr>
            <th>Descripcion</th>
            <th>Precio</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productosLista.map(item => (
            <tr key={item.codigo}>
              <td>{item.descripcion}</td>
              <td>{item.precio.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</td>
              <td>
                <Button variant="dark" onClick={() => agregar(item)}>+</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

Products.propTypes = {
  productosLista: PropTypes.arrayOf(
    PropTypes.shape({
      codigo: PropTypes.number.isRequired,
      descripcion: PropTypes.string.isRequired,
      precio: PropTypes.number.isRequired,
    }),
  ).isRequired,
}