// Write your Character component here
import React  from 'react'
import styled from 'styled-components'

const ContainerDiv = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
margin: 0 auto;
flex-wrap: wrap;
// padding: 20px;
  


`;
const CharDiv = styled.div `
    border: 2px solid red;
    width: 200px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px auto;
    border-radius: 20px;
    padding: 50px;
    // box-shadow: 8px 8px red;
    background-color: darkgrey;


    @-webkit-keyframes swing
{
    15%
    {
        -webkit-transform: translateX(5px);
        transform: translateX(5px);
    }
    30%
    {
        -webkit-transform: translateX(-5px);
       transform: translateX(-5px);
    } 
    50%
    {
        -webkit-transform: translateX(3px);
        transform: translateX(3px);
    }
    65%
    {
        -webkit-transform: translateX(-3px);
        transform: translateX(-3px);
    }
    80%
    {
        -webkit-transform: translateX(2px);
        transform: translateX(2px);
    }
    100%
    {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
}
@keyframes swing
{
    15%
    {
        -webkit-transform: translateX(5px);
        transform: translateX(5px);
    }
    30%
    {
        -webkit-transform: translateX(-5px);
        transform: translateX(-5px);
    }
    50%
    {
        -webkit-transform: translateX(3px);
        transform: translateX(3px);
    }
    65%
    {
        -webkit-transform: translateX(-3px);
        transform: translateX(-3px);
    }
    80%
    {
        -webkit-transform: translateX(2px);
        transform: translateX(2px);
    }
    100%
    {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
}

    &:hover {
        box-shadow: inset 0 0 0 25px red;
        -webkit-animation: swing 1s ease;
        animation: swing 1s ease;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1;
        cursor: pointer;
    }

`;

const CharImg = styled.img `
width: 150px;
height: 150px;
border-radius: 20px;
border: 2px solid red;

&:hover{
    border-radius:50%;
}

`;

const H2 = styled.h2 `
font-family: 'Dancing Script', cursive;
font-size: 2rem;
color: red;

`;


const Character = ({props}) =>{
    return (
        <ContainerDiv>
        {props.slice(0, 7).map((item , index)=>{
            return <CharDiv key={index}>
                <H2>Name: {item.name}</H2>
                <H2>Gender: {item.gender}</H2>
                <CharImg src={item.image}></CharImg>
                </CharDiv>
        })}
        </ContainerDiv>
    )
}

export default Character