import React from 'react';
import { 
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function Button(){
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>
                Confirmar
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        borderRadius: 16,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 32,
        color: colors.white,
        fontFamily: fonts.heading
    }
});