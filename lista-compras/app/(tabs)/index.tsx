import { usarItemsDeCompra } from './hooks/usarItemsDeCompra';
import { Contenedor } from './componentes/Contenedor';
import { TituloPagina } from './componentes/TituloPagina';
import { FormularioNuevoProducto } from './componentes/FormularioNuevoProducto';
import { ListaDeProductos } from './componentes/ListaDeProductos';

export default function App() {
  const {
    productos,
    textoIngresado,
    setTextoIngresado,
    agregarProducto,
    alternarEstadoProducto,
    eliminarProducto,
  } = usarItemsDeCompra();

  return (
    <Contenedor>
      <TituloPagina />
      <FormularioNuevoProducto
        textoActual={textoIngresado}
        alCambiarTexto={setTextoIngresado}
        alEnviar={agregarProducto}
      />
      <ListaDeProductos
        productos={productos}
        alAlternarEstado={alternarEstadoProducto}
        alEliminar={eliminarProducto}
      />
    </Contenedor>
  );
}