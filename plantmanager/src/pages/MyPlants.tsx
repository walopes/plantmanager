import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Alert,
    Image,
    ScrollView,
    Platform,
    TouchableOpacity
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import {Button} from '../components/Button';
import waterdrop from '../assets/waterdrop.png'

import { PlantProps, savePlant, loadPlant } from '../libs/storage';
import { Header } from '../components/Header';
import { useNavigation, useRoute } from '@react-navigation/native';


export function MyPlants(){

    return (
        <View >
            <Header />

            <View style={styles.spotlight}>
                <Image 
                    style={styles.spotlightImage}
                    source={waterdrop}
                />
                <Text style={styles.spotlightText}>
                    fdjklsfdj
                </Text>
            </View>
            <View style={styles.plants}>
                <Text style={styles.plantsTitle}>

                </Text>
            </View>


        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 30,
        justifyContent: 'space-between',
        paddingTop: 50,
        backgroundColor: colors.background
    },
    spotlight: {

    },
    spotlightImage: {

    },
    spotlightText: {

    },
    plants: {

    },
    plantsTitle: {
        
    }
});
