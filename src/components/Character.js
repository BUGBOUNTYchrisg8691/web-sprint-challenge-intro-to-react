// Write your Character component here
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import { ids, BASE_URL } from "../App"

const StyledDiv = styled.div`
    width: 50%;
    background-color: ${props => props.theme.secondaryColor};
    padding: 10px 20px;
    border: 1px solid blue;
`

const StyledChild = styled.div`
    display: flex;
    justify-content: space-evenly;
    border: 1px solid red;
`

const StyledP = styled.p`

`

const StyledUL = styled.ul`

`

export default function Character(props) {
    const { char } = props
    const [info, setInfo] = useState(null)

    useEffect(() => {
        axios.get(`${BASE_URL}${ids[char]}`)
            .then(resp => setInfo(resp.data))
            .catch(err => console.log(err))
    }, [char])

    return (
        // <StyledDiv>
        //     <h3>{ person.name }</h3>
        //     <StyledBtn type="open" onClick={ () => open(person.name) }>See Details</StyledBtn>
        // </StyledDiv>
        info && 
            <StyledDiv>
                <h3>{ info.name }</h3>
                <StyledChild>
                    <>
                        <StyledUL>
                            <li><StyledP type="key">Height:  </StyledP> <StyledP type="value">{ info.height } cm</StyledP></li>
                            <li><StyledP type="key">Mass:  </StyledP> <StyledP type="value">{ info.mass } kg</StyledP></li>
                            <li><StyledP type="key">Hair Color:  </StyledP> <StyledP type="value">{ info.hair_color}</StyledP></li>
                            </StyledUL>
                            <StyledUL>
                            <li><StyledP type="key">Skin Color:  </StyledP> <StyledP type="value">{ info.skin_color}</StyledP></li>
                            <li><StyledP type="key">Eye Color:  </StyledP> <StyledP type="value">{ info.eye_color}</StyledP></li>
                            <li><StyledP type="key">Gender:  </StyledP> <StyledP type="value">{ info.gender }</StyledP></li>
                        </StyledUL>
                    </>
                </StyledChild>
            </StyledDiv>
    )
}