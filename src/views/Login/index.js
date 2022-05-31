import React, { useState } from 'react'
import {Container, Title, Text} from './styles'
import Sidebar from '../../components/styled/Sidebar'
import {InputArea, StyledButton, StyledMessageButton} from '../../components/styled/Others'
import IconInput from '../../components/styled/IconInput'
import { Alert, Platform } from 'react-native'
import { useNavigation, CommonActions } from '@react-navigation/native'
import Api from '../../resources/api/Api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Logo from '../../resources/svg/Logo.jsx'

export default function Login(){
    
    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleMessageButtonClick = () => {

        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    { name: 'Cadastro' },
                ],
            })
        )
    }

    const handleSignClick = async () => {
        if (senha && email) {
            let res = await Api.Login(email, senha)
            if (res.access_token) {
                await AsyncStorage.setItem('token', res.access_token)
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [
                            { name: 'Home' },
                        ],
                    })
                )
            } else {
                Platform.OS === 'web' ? alert(`‼️Erro: ${res.errors[0].msg}`) : Alert.alert("‼️Erro", res.errors[0].msg)
            }
        } else {
            Platform.OS === 'web' ? alert(`‼️Atenção: Preencha todos os campos`) : Alert.alert("‼️Atenção", 'Preencha todos os campos')
        }

    }


    return (
        <>

            <Container>

            <Logo/>
            <InputArea>
                <Text>Email</Text>
                <IconInput
                    placeholder="Informe seu email"
                    value={email}
                    onChangeText={t => setEmail(t)}
                />
                <Text>Senha</Text>
                <IconInput
                    placeholder="Informe sua senha"
                    value={senha}
                    onChangeText={t => setSenha(t)}
                />
            </InputArea>
            
            <StyledButton text="Login" onPress={handleSignClick}/>        

           
        <StyledMessageButton onPress={handleMessageButtonClick} text="Ainda não é cadastrado?" textBold="Crie uma conta" />
            
        </Container>
       </>
    )
}