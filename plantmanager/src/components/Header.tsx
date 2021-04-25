import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import colors from '../styles/colors';
import userImg from '../assets/profile.jpeg';
import fonts from '../styles/fonts';

export function Header(){
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting} >Olá,</Text>
                <Text style={styles.userName} >Willian</Text>
            </View>
            <Image source={userImg} style={styles.image} />

        </View>
    )   
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight()
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.heading
    },
    userName: {
        lineHeight: 40,
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 40
    }
});