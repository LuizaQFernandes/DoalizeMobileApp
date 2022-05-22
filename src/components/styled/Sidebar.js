import React from 'react'
import styled from 'styled-components/native'
import themes from '../../themes'

const Container = styled.SafeAreaView`

    background-color: ${themes.padrao.colors.azul};
    height: 100%; /* Full-height: remove this if you want "auto" height */
    width: 25%; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    right: 0;
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 20px;

    justify-content: center;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

`

const Title = styled.Text`
font-size: 3rem;
color: ${themes.padrao.colors.branco};
margin-left: 8px;
margin-bottom: 0.5rem;
`
const Text = styled.Text`
font-size: 2rem;
color: ${themes.padrao.colors.branco};
margin-left: 8px;
`

const Sidebar = () => {
    return(
        <Container>
            <Title>Seja Solidário</Title>
            <Text>Localize Campanhas Solidárias
            Doe e ajude quem mais precisa</Text>
        </Container>
    )
}
export default Sidebar