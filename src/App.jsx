import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './components/Products'
import Cart from './components/Cart'
import logo from './assets/buenfin.png'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [productosLista, setProductosLista] = useState([
    { codigo: 1, descripcion: "Alienware AC16250, NVIDIA GeForce", precio: 31899 },
    { codigo: 2, descripcion: "UGREEN Mouse Vertical Inalámbrico", precio: 439 },
    { codigo: 3, descripcion: "Logitech Ergo M575S Mouse inalámbrico", precio: 829 },
    { codigo: 4, descripcion: "TCL Smart TV 2025 Pantalla 50", precio: 6278 },
    { codigo: 5, descripcion: "ANTICA Silla Gamer Tela", precio: 3750 },
    { codigo: 6, descripcion: "Bose Audífonos inalámbricos", precio: 4198 },
    { codigo: 7, descripcion: "Ouo Silla Gamer Reclinable", precio: 1499 },
    { codigo: 8, descripcion: "Dell Alienware 16 Aurora", precio: 24999 },
  ]);

  const agregar = (producto) => {
    let existe = false;
    const nuevoCarrito = carrito.map(item => {
      if (item.codigo === producto.codigo) {
        existe = true;
        const nuevaCantidad = item.cantidad + 1;
        return {
          ...item,
          cantidad: nuevaCantidad,
          importe: nuevaCantidad * item.precio,
        };
      }
      return item;
    });
    if (!existe) {
      nuevoCarrito.push({
        ...producto,
        cantidad: 1,
        importe: producto.precio,
      });
    }
    let nuevoTotal = 0;
    nuevoCarrito.map(i => {
      nuevoTotal += i.importe;
      return i;
    });
    setCarrito(nuevoCarrito);
    setTotal(nuevoTotal);
  };

  const eliminar = (codigo) => {
    const nuevoCarrito = carrito
      .map(item => {
        if (item.codigo === codigo && item.cantidad > 0) {
          const nuevaCantidad = item.cantidad - 1;
          if (nuevaCantidad <= 0) {
            return null;
          }
          return {
            ...item,
            cantidad: nuevaCantidad,
            importe: nuevaCantidad * item.precio,
          };
        }
        return item;
      })
      .filter(item => item !== null);
    let nuevoTotal = 0;
    nuevoCarrito.map(i => {
      nuevoTotal += i.importe;
      return i;
    });
    setCarrito(nuevoCarrito);
    setTotal(nuevoTotal);
  };

  return (
    <>
      <Header src={logo} />
      <div className="ContainerBody">
        <Products
          productosLista={productosLista} agregar={agregar} />
        <Cart total={total} carrito={carrito} eliminar={eliminar} />
      </div>
      <Footer>
        <span className="FooterText">Copyright © Todos los derechos reservados</span>
      </Footer>
    </>
  )
}

export default App
