// Write your Character component here
import React  from 'react'
import styled from 'styled-components'

const CharDiv = styled.div `
border: 2px solid blue;
    width: 250px;
    height: 250%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px auto;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 8px 8px tan;
    background-color: darkgrey;
    color: blue;

`;

const CharImg = styled.img `
width: 80px;
height: 80px;


`;


const Character = ({props}) =>{
    return (
        props.slice(0, 5).map((item , index)=>{
            return <CharDiv key={index}>
                <h3>Name: {item.name}</h3>
                <h3>Gender: {item.gender}</h3>
                <CharImg src={item.image}></CharImg>
                </CharDiv>
        })
    )
}

export default Character