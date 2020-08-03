import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [charData, setCharData]= useState([])

    useEffect(()=>{
        axios.get('https://rickandmortyapi.com/api/character/').then(response=>{
            console.log(response);
            // setPokeData(response.data.re)
        }).catch(()=>{
          alert('Something broke')
        })
    },[])


  return (
    <div>
      <h1 className="Header">hey</h1>
    </div>
  );
}

export default App;
