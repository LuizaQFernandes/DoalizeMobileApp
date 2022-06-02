import React, { useState }  from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'
import themes from '../../themes'

const InputArea = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
    height: 76px;
    width: 100%;
    left: 0px;
    top: 4px;
    background:  ${themes.padrao.colors.branco};
    border: 1px solid ${themes.padrao.colors.middleBlack};
    border-radius: 19px;
    padding-left: 5px;
    padding-right: 5px;
`

const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: ${themes.padrao.colors.preto};
    margin-left: 8px;
`

const BotaoTouch = styled.TouchableOpacity`
    padding-right: 8px; 
`

export default ({ icon, placeholder, value, onChangeText, password}) => {
    const [senha, setSenha] = useState(password);
    return (
        <InputArea>
        <MaterialCommunityIcons name={icon} size={30} color={themes.padrao.colors.middleBlack} />
            <Input
                placeholder={placeholder}
                placeholderTextColor={themes.padrao.colors.preto}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={senha}
            />
            {password &&
                <BotaoTouch onPress={() => setSenha(!senha)}>
                    <MaterialCommunityIcons name={senha ? 'eye' : 'eye-off'} size={30} color={themes.padrao.colors.preto} />
                </BotaoTouch>}
        </InputArea>
    )
}