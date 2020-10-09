import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import axios from "axios";
import styled, { Select, keyframes } from "styled-components"

import Character from "./components/Character"
import Details from "./components/Details"

const BASE_URL = "https://swapi.dev/api/"

const keyframeAnimation = keyframes`
  25% {
    opacity: 10%;
    transform: scale(0.1);
    transform: rotateX(180deg);
    transform: rotateY(90deg);
  }
  50% {
    opacity: 40%;
    transform: scale(0.4);
    transform: rotateX(180deg);
    transform: rotateY(90deg);
  }
  75% {
    opacity: 80%;
    transform: scale(0.7);
    transform: rotateX(180deg);
    transform: rotateY(90deg);
  }
  99% {
    opacity: 100%;
    transform: scale(0.9);
    transform: rotateX(180deg);
    transform: rotateY(90deg);
  }
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid red; */
  transform: scale(1);
  opacity: 100%;
  animation: ${keyframeAnimation} 0.9s ease-in-out;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([])
  const [character, setCharacter] = useState(null)
  const selectRef = useRef()

  useEffect(() => {
    axios.get(`${BASE_URL}people/`)
      .then(resp => resp.data.results)
      .then(chars => setCharacters(chars))
      .catch(err => { debugger })
  }, [])

  const selectChar = (e) => {
    e.preventDefault()
    console.log(e)
    // console.log(selectRef.current.value)
  }

  return (
    <div>
        {/* {characters.length !== 0 
          ? <select ref={selectRef} onChange={selectChar} name="characters" id="chars">
              <option value={characters[0]}>{characters[0].name}</option>
              <option value={characters[1]}>{characters[1].name}</option> 
              <option value={characters[2]}>{characters[2].name}</option>
              <option value={characters[3]}>{characters[3].name}</option>
              <option value={characters[4]}>{characters[4].name}</option>
              <option value={characters[5]}>{characters[5].name}</option>
              <option value={characters[6]}>{characters[6].name}</option>
              <option value={characters[7]}>{characters[7].name}</option>
              <option value={characters[8]}>{characters[8].name}</option>
              <option value={characters[9]}>{characters[9].name}</option>
            </select>
          <select 
        name="form-field-name"
        placeholder="Select a brand"
        searchable={false}
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />
          : null
        }
        {characters.map(char => {

        })} */}

    </div>
  );
}

export default App;

// const App = () => {
//   // Try to think through what state you'll need for this app before starting. Then build out
//   // the state properties here.

//   // Fetch characters from the API in an effect hook. Remember, anytime you have a 
//   // side effect in a component, you want to think about which state and/or props it should
//   // sync up with, if any.

//   return (
//     <div className="App">
//       <h1 className="Header">Characters</h1>
//     </div>
//   );
// }

// export default App;
