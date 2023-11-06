import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/stylesheet';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10);


  return (
    <View style={ styles.container }>
        <Text style={ styles.title }>
            Contador: { contador }
        </Text>

        <Fab
            title="+1"
            position="br"
            onPress={ () => setContador( contador + 1) }
        />

        <Fab
            title="-1"
            position="bl"
            onPress={ () => setContador( contador - 1) }
        />

        {/* <TouchableOpacity
            style= { styles.buttonLocationBL }
            onPress={ () => setContador( contador - 1)}
        >
            <View style={ styles.button }>
                <Text style={ styles.buttonText }>-1</Text>
            </View>
        </TouchableOpacity> */}

    </View>
  );
};
