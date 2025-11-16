import React from 'react'
import PropTypes from 'prop-types'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function Cart({ total, carrito, eliminar }) {
  return (
    <div className="CartContainer">
      <span className="Text">{`Carrito: ${total.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}`}</span>
      <Table striped bordered hover size="sm" className="TableFull">
        <thead>
          <tr>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Importe</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {carrito.map(item => (
            <tr key={item.codigo}>
              <td>{item.descripcion}</td>
              <td>{item.precio.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</td>
              <td>{item.cantidad}</td>
              <td>{item.importe.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</td>
              <td>
                <Button variant="danger" onClick={() => eliminar(item.codigo)}>-</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

Cart.propTypes = {
  total: PropTypes.number,
  carrito: PropTypes.arrayOf(
    PropTypes.shape({
      codigo: PropTypes.number,
      descripcion: PropTypes.string,
      precio: PropTypes.number,
      cantidad: PropTypes.number,
      importe: PropTypes.number
    }),
  ),
}