import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList // Generate the list of elements
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import {Header} from '../components/Header';
import { EnvironmentButton } from '../components/EnvironmentButton';
import api from '../services/api';
import { PlantCardPrimary } from '../components/PlantCardPrimary';

interface EnvironmentProps{
    key: string;
    title: string;
};

interface PlantProps{
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environment: [string];
    frequency: {
        times: number;
        repeat_every: string;
    }
}

export function PlantSelect(){

    const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
    const [plants, setPlants] = useState<EnvironmentProps[]>([]);
    const [filteredPlants, setFilteredPlants] = useState<EnvironmentProps[]>([]);
    const [environmentSelected, setEnvironmentSelected] = useState('all');

    function handleEnvironmentSelected(environment: string){
        setEnvironmentSelected(environment);

        if(environment === 'all')
            return setFilteredPlants(plants);

        const filtered = plants.filter(plant =>
            plant.environments.include(environment)
        );

        setFilteredPlants(filtered);
        
    };

    useEffect(() => {
        async function fetchEnvironment(){
            const {data} = await api.
            get('plants_environments?_sort=title&_order=asc');
            setEnvironments([
                {
                    key: 'all',
                    title: 'Todos'
                },
                ...data
            ]);
        }

        fetchEnvironment();

    }, []);

    useEffect(() => {
        async function fetchPlants(){
            const {data} = await api.
            get('plants?_sort=name&_order=asc');
            setPlants([
                {
                    key: 'all',
                    title: 'Todos'
                },
                ...data
            ]);
        }

        fetchPlants();

    }, []);


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header />

                <Text style={styles.title}>Em qual ambiente</Text>
                <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
            </View>

            <View>
                <FlatList
                    data={(environments)}
                    renderItem={
                        ({item}) => (
                            <EnvironmentButton  
                                title={item.title}
                                active={item.key === environmentSelected}
                                onPress={() => handleEnvironmentSelected(item.key)}
                            />
                        )
                    }
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.environmentList}
                />
            </View>

            <View style={styles.plants}>
                <FlatList
                    data={filteredPlants}
                    renderItem={({item}) => (
                        <PlantCardPrimary data={item} />
                    )}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                />
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    header: {
        paddingHorizontal: 30
    },
    title: {
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 28,
        marginTop: 20
    },
    subtitle: {
        fontSize: 17,
        fontFamily: fonts.text
    },
    environmentList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 32,
        marginVertical: 32
    },
    plants: {
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: 'center'
    }
});