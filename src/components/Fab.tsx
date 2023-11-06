import React from 'react'
import { Platform, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/stylesheet';


interface Props {
    title: string
    position?: 'br' | 'bl'
    onPress: () => void
}


export const Fab = ({ title, onPress, position = 'br' }: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={ 0.75 }
                style= {[
                    styles.buttonLocation,
                    ( position === 'bl' ) ? styles.left : styles.right,
            ]}>
                <View style={ styles.button }>
                    <Text style={ styles.buttonText }>{title}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    const android = () => {
        return (
            <View
                style= {[
                    styles.buttonLocation,
                    ( position === 'bl' ) ? styles.left : styles.right,
                ]}
            >
                <TouchableNativeFeedback
                    onPress={ onPress }
                    background={ TouchableNativeFeedback.Ripple('pink', false, 30) }
                >
                    <View style={ styles.button }>
                        <Text style={ styles.buttonText }>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    };

    return (Platform.OS === 'ios') ? ios() : android();
};
