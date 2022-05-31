import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'
import themes from '../../themes'

export const InputArea = styled.ScrollView`
padding: 16px;
width: 80%;
margin-bottom: 32px;

`

const CustomButton = styled.TouchableOpacity`
flex-direction: row;
background-color: ${themes.padrao.colors.azul};
justify-content: center;
align-items: center;
height: 45px;
width: 150px;
left: 0px;
top: 0px;
border-radius: 26px;
margin-top: 15px;
margin-bottom: 15px;
`


const CustomButtonText = styled.Text`
color: ${themes.padrao.colors.middleBlack};
font-weight: 400;
font-size: 24px;
line-height: 49px;
text-align: center;
`

export const StyledButton = ({ text, onPress }) => {
    return (
        <CustomButton
            onPress={onPress}>
            <CustomButtonText>{text}</CustomButtonText>
        </CustomButton>
    )
}

const MessageButton = styled.TouchableOpacity`
flex-direction: row;
justify-content: center;
margin-top: 8px;
margin-bottom: 16px;
`
const MessageButtonText = styled.Text`
font-size: 16px;
color: ${themes.padrao.colors.middleBlack};
`
const MessageButtonTextBold = styled.Text`
font-size: 16px;
color: ${themes.padrao.colors.azul};
font-weight: bold;
margin-left: 8px;
`
export const StyledMessageButton = ({ text, textBold, onPress }) => {
    return (
        <MessageButton
            onPress={onPress}>
            <MessageButtonText>{text}</MessageButtonText>
            <MessageButtonTextBold>{textBold}</MessageButtonTextBold>
        </MessageButton>
    )
}

