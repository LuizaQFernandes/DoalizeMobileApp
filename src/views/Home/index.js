import React from 'react'
import {Container, Title} from './styles'
import {StyledButton} from '../../components/styled/Others'
import Api from '../../resources/api/Api'
import { useNavigation, CommonActions } from '@react-navigation/native'
import Image from '../../resources/svg/Foto'

export default function Login(){

    const navigation = useNavigation()

    const sair = async() => {
        await Api.logout()
        navigation.navigate('Login')
    }

    return (
        <>
        <Container>
        <Image/>
        <StyledButton text="Logout" onPress={sair}/>
        </Container>
       </>
    )
}