import React, { useState } from 'react'
import { Button } from '../components/Button'

import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform
} from 'react-native'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

/*
 KeyboardAvoidingView é para ajudar a ter um melhor resultado com os inputs dentro da aplicação, mantendo o botão de confirmar aparecendo na tela mesmo quando o usuário está com o teclado do celular aberto
*/

export function UserIdentification() {
    /* 
    os dois primeiros states não precisaram ser tipados por que atribuindo o valor de FALSE, ele já vai automaticamente entender que é um dado booleano.
    Já o state name precisa receber uma tipagem do tipo string <string>
    */

    const [isFocused, setIsFocused] = useState(false); // Capturando se o input está focado
    const [isFilled, setIsFilled] = useState(false); // Capturando se o input está preenchido
    const [name, setName] = useState<String>() // Capturando o nome do usuário em um state

    function handleInputBlur(){
        setIsFocused(false)

        setIsFilled(!!name)
    }

    function handleInputFocus(){
        setIsFocused(true)
    }

    function handleInputChange(value: string){
        // Transformando o value em true ou False
        // Caso tenha conteúdo = true
        setIsFilled(Boolean(value))
        setName(value)
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
                style={styles.container}
                // Personalizando o comportamento em diferentes plataformas
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >

                <View style={styles.content}>
                    <View style={styles.form}>

                        <View style={styles.header}>
                            {/* Esta view foi criada por causa do keyboardAvoidingView */}
                            <Text style={styles.emoji}>
                                {isFilled ? '😁' : '😃'}
                            </Text>

                            <Text style={styles.title}>
                                Como podemos {'\n'} chamar você?
                            </Text>
                        </View>

                        <TextInput
                            // É possível passar mais de um estilo, utilizando vetor
                            style={[
                                styles.input,
                                // Caso o state isFocused esteja como TRUE
                                (isFocused || isFilled) && {borderColor: colors.green}
                            ]}
                            placeholder="Digite o seu nome"

                            // Customizando propriedades com funções
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            // Capturando os valores para atribuir no state name
                            onChangeText={handleInputChange}
                        />

                        <View style={styles.footer}>
                            <Button title={'Confirmar'} />
                        </View>
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
    content: {
        flex: 1,
        width: '100%'
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 54,
    },
    header: {
        alignItems: 'center'
    },
    emoji: {
        fontSize: 36
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
    title: {
        fontSize: 24,
        textAlign: 'center',
        colors: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 32,
        marginTop: 24
    },
    footer: {
        marginTop: 56,
    }
})