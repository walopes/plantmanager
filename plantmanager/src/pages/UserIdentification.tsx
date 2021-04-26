import React, {useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard,
    Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Button } from '../components/Button';

export function UserIdentification(){

    /* 
    CONSTANTS 
    */
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();
    const navigation = useNavigation();

    /*
    FUNCTION
    */
    function handleInputBlur(){
        setIsFocused(false);
        setIsFilled(!!name);
    };
    function handleInputFocus(){
        setIsFocused(true);
    };

    /**
     * This function identifies when the input from user changes.
     * If there is content on the field, return true, otherwise return false
     * @param value 
     */
    function handleInputChange(value: string){
        setIsFocused(!!value);
        setName(value);
    };

    async function handleSubmit(){
        if(!name)
            return Alert.alert('Me diz como eu posso te chamar? Nunca te pedi nada 😁');

        /**
         * Good pattern for key: @{app_name}.{function}
         */
        try{
            await AsyncStorage.setItem('@plantmanager.user', name);
            navigation.navigate('Confirmation', {
                title: 'Prontinho',
                subtitle: 'Agora vamos começar a cuidar das suas plantinhas',
                buttonTitle: 'Começar',
                icon: 'smile',
                nextScreen: 'PlantSelect'
            });
        }catch{
            return Alert.alert('Não foi possível salvar o seu nome!');
        }
    };

    /*
    MAIN
    */

    return (
        <SafeAreaView style={styles.container}>
            {/* Shows the confirm button when the keyboard is called */}
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                {/* UX tip - Hide the keyboard when user presses  */}
                <TouchableWithoutFeedback 
                    onPress={Keyboard.dismiss}
                >

                    <View style={styles.content}>
                        <View style={styles.form}>
                            {/* This view was added to make the slide 
                            of content smoother when keyboard is displayed */}
                            <View style={styles.header}> 
                                <Text style={styles.emoji}>
                                    { isFilled ? '😄' : '😃'}
                                </Text>

                                <Text style={styles.title}>
                                    Como podemos {'\n'}
                                    chamar você?
                                </Text>
                                
                            </View>

                            <TextInput 
                                /* The style change if the user presses 
                                something but keeps it if field is not null*/
                                style={[
                                    styles.input,
                                    (isFocused || isFilled) && 
                                    {borderColor: colors.green}

                                ]}
                                placeholder="Digite o seu nome"
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={handleInputChange}
                            />
                        <View style={styles.footer}>
                            <Button
                                title="Confirmar"
                                onPress={handleSubmit}
                            />
                        </View >
                        </View>
                        
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
         </SafeAreaView>
    )
}

/*
STYLE
*/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    header: {
        alignItems: 'center'
    },
    content: {
        flex: 1,
        width: '100%'
    },
    title: {
        fontSize: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
    },
    emoji: {
        fontSize: 44
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20
    }
});
