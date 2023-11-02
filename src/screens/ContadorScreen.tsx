import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/stylesheet';

export const ContadorScreen = () => {

    const [contador, setContador] = useState(0);


  return (
    <View style={ styles.container }>
        <Text style={ styles.title }>
            Contador: { contador }
        </Text>

        <TouchableOpacity
            onPress={ () => setContador( contador + 1)}
        >
            <View style={ styles.button }>
                <Text style={ styles.buttonText }>+1</Text>
            </View>
        </TouchableOpacity>

    </View>
  );
};
