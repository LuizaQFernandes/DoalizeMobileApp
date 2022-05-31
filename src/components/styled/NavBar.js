import React from 'react'
import styled from 'styled-components/native'
import themes from '../../themes'
import ReturnButton from './Others'

const Container = styled.SafeAreaView`

    background-image: linear-gradient(rgba(68, 175, 198, 1), rgba(0, 177, 177, 1));
    height: 10%; /* Full-height: remove this if you want "auto" height */
    width: 100%; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    
    padding-top: 5px;

    padding-left: 0.5rem;
    padding-right: 0.5rem;
`

const NavBar = () => {
    return(
        <Container>

        </Container>
    )
}
export default NavBar