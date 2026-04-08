import { useState } from 'react';
import { Producto } from '../tipos/Producto';

export const usarItemsDeCompra = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [textoIngresado, setTextoIngresado] = useState('');

  const agregarProducto = () => {
    const textoLimpio = textoIngresado.trim();
    if (!textoLimpio) return;

    setProductos((productosAnteriores) => [
      ...productosAnteriores,
      { id: String(Date.now()), nombre: textoLimpio, estaComprado: false },
    ]);
    setTextoIngresado('');
  };

  const alternarEstadoProducto = (id: string) => {
    setProductos((productosAnteriores) =>
      productosAnteriores.map((producto) =>
        producto.id === id ? { ...producto, estaComprado: !producto.estaComprado } : producto
      )
    );
  };

  const eliminarProducto = (id: string) => {
    setProductos((productosAnteriores) =>
      productosAnteriores.filter((producto) => producto.id !== id)
    );
  };

  return {
    productos,
    textoIngresado,
    setTextoIngresado,
    agregarProducto,
    alternarEstadoProducto,
    eliminarProducto,
  };
};