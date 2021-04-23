import React from 'react';
import {
    StyleSheet, 
    SafeAreaView, 
    Text, 
    Image, 
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { Feather } from '@expo/vector-icons'; // Import Feather icon library

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';

export function Welcome(){
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil
            </Text>
            <Image 
                source={wateringImg} 
                style={styles.image} 
                resizeMode="contain"
            />

            <Text style={styles.subtitle}>
                Não esqueça mais de regar as suas plantas.
                Nós cuidamos delas para você sepre que precisar.
            </Text>

            <TouchableOpacity 
                style={styles.button} 
                activeOpacity={0.7}
            >
                <Feather 
                    name="chevron-right" 
                    style={styles.buttonIcon}
                />
            </TouchableOpacity>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around' // Changed from 'space-between' to 
        // 'space-around' in order to do not glue on the borders
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20, 
        color: colors.heading
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    image: {
        // width: 292,
        // height: 284
        height: Dimensions.get('window').width * 0.7
    },
    buttonIcon: {
        fontSize: 28
    }
});
