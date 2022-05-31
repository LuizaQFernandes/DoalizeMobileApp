import React from 'react'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import themes from '../../themes'
import Pin from '../../resources/svg/Pin.jsx'

export default({ data }) => {
    const navigation = useNavigation()
    const navegaDetalhe = () => {
        navigation.navigate('Campanha',{campanha:data})
    }

    return (
        <Area onPress={navegaDetalhe}>
        <Pin/>
          <Titulo>{data.titulo}</Titulo> 
          <InfoArea>
              <BotaoDetalhes>
                  <BotaoDetalhesText>Detalhes</BotaoDetalhesText>
              </BotaoDetalhes>
          </InfoArea>
        </Area>
    )
}

const Area = styled.TouchableOpacity`
background: ${themes.padrao.colors.branco};
margin: 8px;
border-radius: 8px;
padding: 10px;
flex-direction: row
`
const Titulo = styled.Text`
font-size: 20px;
padding: 8px;
color: ${themes.padrao.colors.middleBlack}
`
const InfoArea = styled.View`
flex: 1;
`

const BotaoDetalhes = styled.View`
width: 90px;
height: 32px;
background: ${themes.padrao.colors.azul};
border-radius: 20px;
justify-content: center;
align-items: center;
`
const BotaoDetalhesText = styled.Text`
font-size: 16px;
padding: 8px;
color: ${themes.padrao.colors.middleBlack}
`

