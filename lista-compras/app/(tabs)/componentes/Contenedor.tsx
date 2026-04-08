import { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

export const Contenedor = ({ children }: { children: ReactNode }) => {
  return <View style={estilos.contenedor}>{children}</View>;
};

const estilos = StyleSheet.create({
  contenedor: { flex: 1, padding: 16, gap: 12, backgroundColor: '#fff' },
});