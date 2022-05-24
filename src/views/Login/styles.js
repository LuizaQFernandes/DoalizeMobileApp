import styled from 'styled-components/native'
import themes from '../../themes'

export const Container = styled.View`
display: flex;
align-items: center;
justify-content: center;
width: 75%
`

export const Title = styled.Text`
color: ${props => props.theme.color};
font-size: 44px; 

`
export const Text = styled.Text`
    margin-top: 15px;
    font-weight: 400;
    font-size: 24px;
    color: ${themes.padrao.colors.middleBlack};
`