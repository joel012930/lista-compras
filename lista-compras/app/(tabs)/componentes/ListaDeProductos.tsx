import { FlatList, View, Text, Pressable, StyleSheet } from 'react-native';
import { Producto } from '../tipos/Producto';

type Props = {
  productos: Producto[];
  alAlternarEstado: (id: string) => void;
  alEliminar: (id: string) => void;
};

export const ListaDeProductos = ({ productos, alAlternarEstado, alEliminar }: Props) => {
  const renderizarProducto = ({ item }: { item: Producto }) => (
    <Pressable
      onPress={() => alAlternarEstado(item.id)}
      onLongPress={() => alEliminar(item.id)}
      style={estilos.fila}
    >
      <Text style={[estilos.textoFila, item.estaComprado && estilos.textoTachado]}>
        {item.nombre}
      </Text>
      <Text style={[estilos.pildora, item.estaComprado ? estilos.pildoraComprado : estilos.pildoraPendiente]}>
        {item.estaComprado ? '✔' : '•'}
      </Text>
    </Pressable>
  );

  return (
    <FlatList
      data={productos}
      keyExtractor={(item) => item.id}
      renderItem={renderizarProducto}
      ListEmptyComponent={
        <Text style={estilos.vacio}>Sin productos. ¡Agregá el primero! 😊</Text>
      }
      ItemSeparatorComponent={() => <View style={estilos.separador} />}
      contentContainerStyle={{ paddingBottom: 32 }}
    />
  );
};

const estilos = StyleSheet.create({
  fila: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textoFila: { fontSize: 16 },
  textoTachado: { textDecorationLine: 'line-through', color: '#999' },
  pildora: {
    minWidth: 28,
    height: 28,
    borderRadius: 14,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '700',
  },
  pildoraPendiente: { backgroundColor: '#eee', color: '#666' },
  pildoraComprado: { backgroundColor: '#2ecc71', color: '#fff' },
  separador: { height: 1, backgroundColor: '#eee' },
  vacio: { textAlign: 'center', color: '#777', marginTop: 24 },
});