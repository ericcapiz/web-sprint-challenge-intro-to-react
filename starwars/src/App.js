import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import Header from './components/header';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [charData, setCharData]= useState([])

    useEffect(()=>{
        axios.get('https://rickandmortyapi.com/api/character/').then(response=>{
            console.log(response.data.results);
            setCharData(response.data.results)
        }).catch(()=>{
          alert('Something broke')
        })
    },[])



  return (
    <div className="App">
      <Header />
      <Character props={charData} />
     

    </div>
  );
}

export default App;
