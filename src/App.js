import React, { useState, useEffect, useRef, createRef } from 'react';
import './App.css';
import axios from "axios";
import styled, { keyframes } from "styled-components"
import Character from "./components/Character"
import Details from "./components/Details"
import Select from "react-select"
const { v4: uuidv4 } = require('uuid');


export const BASE_URL = "https://swapi.dev/api/people/"

const StyledSelect = styled(Select)`
  width: 25%;
  margin: 25px 0;
`

const StyledDiv = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ids = {
  "Luke Skywalker": 1,
  "C-3PO": 2,
  "R2-D2": 3,
  "Darth Vader": 4,
  "Leia Organa": 5,
  "Owen Lars": 6,
  "Beru Whitesun lars": 7,
  "R5-D4": 8,
  "Biggs Darklighter": 9,
  "Obi-Wan Kenobi": 10
}

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([])
  const [charName, setCharName] = useState(null)
  // const selectRef = createRef()

  useEffect(() => {
    axios.get(`${BASE_URL}`)
      .then(resp => resp.data.results)
      .then(chars => setCharacters(chars))
      .catch(err => { debugger })
  }, [])

  const fillSelect = characters.map(char => {
      return {
        "value" : char.name,
        "label" : char.name
      }
  })

  return (
    <StyledDiv className="App">
      <h1 className="Header">Choose a Star Wars character:</h1>
      {
        characters &&
          <StyledSelect onChange={ e => setCharName(e.value) } options={ fillSelect } name={ characters } id="chooseChar" />
          // <StyledForm ref={ formRef }>
          //   <Select options={ getChars } />
          // </StyledForm>
      }
      {
        charName !== null &&
          <Character char={ charName } />
      }
    </StyledDiv>
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
//   );
// }

// export default App;
