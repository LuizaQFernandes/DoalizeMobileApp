import React, {useState, useEffect} from 'react'
import {Container, Title} from './styles'
import {ScrollView, ActivityIndicator, Text, Button} from 'react-native'
import {StyledButton} from '../../components/styled/Others'
import Api from '../../resources/api/Api'
import { useNavigation, CommonActions } from '@react-navigation/native'
import Image from '../../resources/svg/Foto'
import NavBar from '../../components/styled/NavBar'
import Fab from '../../components/styled/Fab'
import ListaCampanha from '../../components/styled/ListaCampanha'
import themes from '../../themes'

export default function Home(){
    const [loading, setLoading] = useState(false)
    const [listaCampanhas, setListaCampanhas] = useState([])
    const navigation = useNavigation()
    
    async function getCampanhas(){
       setLoading(true)
       let res = await Api.getCampanhas()
       res.ok === 0 
        ? alert(`Não foi possível obter a lista de campanhas ${res.codeName}`)
        : setListaCampanhas(res)
       setLoading(false)
    }

    const sair = async() => {
        await Api.logout()
        navigation.navigate('Login')
    }

    //Carregando os dados na primeira vez
    useEffect(() => {
        getCampanhas()
    },[])

    return (
        <>
        <NavBar/>
        <Container>
        <StyledButton text="Refresh"
            onPress={() => getCampanhas()} > 
        </StyledButton>
        <ScrollView>

        {loading &&
            <ActivityIndicator size="large" 
                color={themes.padrao.colors.azul} />
            }
            {listaCampanhas.length === 0 && !loading &&
            <Text>Ops! Não existe nenhuma campanha cadastrada.</Text>
            }

            {listaCampanhas.map((campanha, k) => (
                <ListaCampanha key={k} data={campanha} />
            ))}
            </ScrollView>
            
            <Fab title="Nova Campanha"
                 onPress={()=> navigation.navigate('Campanha')}
            />
        <StyledButton text="Logout" onPress={sair}/>
        </Container>
        
       </>
    )
}