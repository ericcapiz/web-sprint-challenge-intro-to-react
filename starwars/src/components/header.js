import React from 'react'
import styled from 'styled-components';

const Heading = styled.h1 `
    font-family: 'Courgette', cursive;
    padding-top: 50px;
    font-size: 80px;
    color: red;
`;

const Header = ()=> {
    return(
        <Heading>Meet The Cast:</Heading>
    )
}

export default Header