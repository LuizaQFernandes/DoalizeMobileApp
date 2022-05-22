import React, {useEffect} from 'react'
import { useNavigation, CommonActions } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Api from '../../resources/api/Api'
import { Container, Title } from './styles'
import { ActivityIndicator } from 'react-native'
import themes from '../../themes'

export default function Preload(){
    const navigation = useNavigation()
    useEffect(()=> {
        const checkToken = async() => {
            const token = await AsyncStorage.getItem('token')
            if (token) { //Se o token existir, verificamos se é válido
              let res = await Api.checkToken(token)
              if (res.access_token) { //Se retornou o token, está ok
                await AsyncStorage.setItem('token', res.access_token)
                navigation.navigate('Home')
              } else {
                  navigation.navigate('Signin') //Token é inválido
              }
            } else { //Token não existe no AsyncStorage
                  navigation.navigate('Signin')
            }
        }
    checkToken()
    },[])

    return(
        <Container>
            <ActivityIndicator size="large" 
                               color={themes.padrao.colors.azul} />
            <Title>Aguarde...</Title>
        </Container>
    )
}