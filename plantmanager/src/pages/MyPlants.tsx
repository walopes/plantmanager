import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    FlatList
} from 'react-native';
import { formatDistance } from 'date-fns';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import waterdrop from '../assets/waterdrop.png'

import { PlantProps, loadPlant } from '../libs/storage';
import { Header } from '../components/Header';
import { pt } from 'date-fns/locale';
import { PlantCardSecondary } from '../components/PlantCardSecondary';


export function MyPlants(){

    const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextWatered, setNextWatered] = useState<string>();

    useEffect(() => {
        async function loadStorageData(){
            const plantsStoraged = await loadPlant();

            const nextTime = formatDistance(
                new Date(plantsStoraged[0].dateTimeNotification).getTime(),
                new Date().getTime(),
                {locale: pt }
            );

            setNextWatered(
                `Não se esqueça de regar a ${plantsStoraged[0].name} à ${nextTime} horas.`
            );
            setMyPlants(plantsStoraged);
            setLoading(false);
        };

        loadStorageData();

    }, []);

    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.spotlight}>
                <Image 
                    style={styles.spotlightImage}
                    source={waterdrop}
                />
                <Text style={styles.spotlightText}>
                    { nextWatered }
                </Text>
            </View>

            <View style={styles.plants}>
                <Text style={styles.plantsTitle}>
                    Próximas regadas
                </Text>

                <FlatList
                    data={myPlants}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <PlantCardSecondary data={item} />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{flex: 1}}
                />

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
        backgroundColor: colors.blue_light,
        paddingHorizontal: 20,
        borderRadius: 20,
        height: 110,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    spotlightImage: {
        width: 60,
        height: 60
    },
    spotlightText: {
        flex: 1,
        color: colors.blue,
        paddingHorizontal: 20,
        textAlign: 'justify'
    },
    plants: {
        flex: 1,
        width: '100%'
    },
    plantsTitle: {
        fontSize: 24,
        fontFamily: fonts.heading,
        color: colors.heading,
        marginVertical: 20
    }
});
