import { StyleSheet } from 'react-native';

// Define estilos reutilizables en un objeto styles
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        top: -15, // Ajuste de posición vertical negativo
    },
    buttonLocation: {
        position: 'absolute',
        bottom: 25, // Coloca elementos en la parte inferior con un espacio de 25 unidades
    },
    left: {
        left: 25, // Coloca elementos en la izquierda con un espacio de 25 unidades
    },
    right: {
        right: 25, // Coloca elementos en la derecha con un espacio de 25 unidades
    },
    button: {
        backgroundColor: 'lightpink',
        width: 60,
        height: 60,
        borderRadius: 100, // Hace que el botón tenga forma redonda con un radio de 100 (lo que significa que es un círculo)
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 8, // Efecto de elevación para dar una apariencia de profundidad al botón
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});

