import { Text, StyleSheet } from 'react-native';

export const TituloPagina = () => {
  return <Text style={estilos.titulo}>🛒 Lista de Compras</Text>;
};

const estilos = StyleSheet.create({
  titulo: { fontSize: 24, fontWeight: 'bold', marginTop: 12 },
});