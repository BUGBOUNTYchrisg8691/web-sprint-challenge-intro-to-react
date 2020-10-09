import React, { useState, useEffect } from 'react';
import axios from "axios"
import './App.css';
import styled, { keyframes } from "styled-components"

import { StyledDiv } from "./components/Character"

import Character from "./components/Character"
import Details from "./components/Details"

export const BASE_URL = "https://swapi.dev/api/"
  
export const ids = {
  "Luke Skywalker": 1,
  "C-3P0": 2,
  "R2-D2": 3,
  "Darth Vader": 4,
  "Leia Organa": 5,
  "Owen Lars": 6,
  "Beru Whitesun lars": 7,
  "R5-D4": 8,
  "Biggs Darklighter": 9,
  "Obi-Wan Kenobi": 10
}

const StyledSubDiv = styled.div`
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    width: 100%;
    /* border: 1px solid red; */
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([])
  const [charID, setCharID] = useState(null)

  useEffect(() => {
    axios.get(`${BASE_URL}people/`)
      .then(resp => resp.data.results)
      .then(chars => setCharacters(chars))
      .catch(err => { debugger })
  }, [])

  const openDetails = id => {
    setCharID(id)
  }

  const closeDetails = () => {
    setCharID(null)
  }

  return (
    <StyledDiv className="App">
      <h1 className="Header">Characters</h1>
      <StyledSubDiv>
        {
          characters.map(character => {
            return <Character key={ids[character.name]} info={character} action={openDetails} />
          })
        }
        {
          charID && <Details charID={charID} close={closeDetails} />
        }
      </StyledSubDiv>
    </StyledDiv>
  );
}

export default App;
