/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';

export const HolaMundoScreen = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
    }}>
        <Text style={{
        fontSize: 30,
        textAlign: 'center',

        }}>
        Hola Raquel
        </Text>
    </View>
  );
};

