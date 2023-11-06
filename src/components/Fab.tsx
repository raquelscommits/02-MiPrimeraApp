import React from 'react';
import {
  Platform,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from '../styles/stylesheet';

// Definición de los tipos de propiedades que se esperan para el componente Fab
interface Props {
  title: string; // Título que se muestra en el botón
  position?: 'br' | 'bl'; // Posición del botón, por defecto en la parte inferior derecha ('br') o izquierda ('bl')
  onPress: () => void; // Función que se ejecutará al presionar el botón
}

// Componente Fab que representa un botón flotante
export const Fab = ({ title, onPress, position = 'br' }: Props) => {

  // Función para renderizar el botón en dispositivos iOS
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.75}
        style={[
          styles.buttonLocation,
          position === 'bl' ? styles.left : styles.right,
        ]}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // Función para renderizar el botón en dispositivos Android
  const android = () => {
    return (
      <View
        style={[
          styles.buttonLocation,
          position === 'bl' ? styles.left : styles.right,
        ]}
      >
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('pink', false, 30)}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  // Determina qué función de renderizado utilizar según la plataforma (iOS o Android)
  return Platform.OS === 'ios' ? ios() : android();
};

