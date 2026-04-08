import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';

type Props = {
  textoActual: string;
  alCambiarTexto: (texto: string) => void;
  alEnviar: () => void;
};

export const FormularioNuevoProducto = ({ textoActual, alCambiarTexto, alEnviar }: Props) => {
  return (
    <View style={estilos.filaInput}>
      <TextInput
        value={textoActual}
        onChangeText={alCambiarTexto}
        placeholder="Agregar producto (ej: Leche)"
        style={estilos.input}
        returnKeyType="done"
        onSubmitEditing={alEnviar}
      />
      <Pressable style={estilos.botonAgregar} onPress={alEnviar}>
        <Text style={estilos.textoBoton}>Agregar</Text>
      </Pressable>
    </View>
  );
};

const estilos = StyleSheet.create({
  filaInput: { flexDirection: 'row', gap: 8 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
  },
  botonAgregar: {
    backgroundColor: '#1e90ff',
    paddingHorizontal: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBoton: { color: '#fff', fontWeight: '600' },
});