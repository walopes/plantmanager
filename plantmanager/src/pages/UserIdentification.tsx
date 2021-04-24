import React, {useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView, //It shows the confirm button when the keyboard is called
    Platform
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Button } from '../components/Button';

export function UserIdentification(){
    const [isFocused, setIsFocused] = useState(false);
    function handleInputBlur(){

    };
    function handleInputFocus(){

    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.content}>
                    <View style={styles.form}>
                        {/* This view was added to make the keyboard show smoother */}
                        <View style={styles.header}> 
                            <Text style={styles.title}>
                                Como podemos {'\n'}
                                chamar você?
                            </Text>
                            <Text style={styles.emoji}>
                                😃
                            </Text>

                        </View>

                        <TextInput 
                            style={styles.input}
                            placeholder="Digite o seu nome"
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                        />
                    <View style={styles.footer}>
                        <Button></Button>
                    </View >
                    </View>
                    
                </View>
            </KeyboardAvoidingView>
         </SafeAreaView>
    )
}

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
