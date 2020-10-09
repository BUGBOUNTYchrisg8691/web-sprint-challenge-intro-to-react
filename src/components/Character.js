// Write your Character component here
import React from "react"
import styled from "styled-components"
import { Button } from "reactstrap"

import { StyledBtn } from "./Details"

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid black;
    border-radius: 10px;
    box-shadow: 10px 10px 0 0;
    width: 60%;
    margin: 10px auto;
    background-color: ${props => props.theme.secondaryColor};
    /* color: ${props => props.theme.primaryColor}; */
    /* justify-content: center; */
    h3 {
        color: ${props => props.theme.tertiaryColor};
    }
`

const StyledSubDiv = styled.div`
    display: flex;
    width: 60%;
    border: 1px solid red;
`

const StyledUL = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: ${props => props.theme.primaryColor};
    width: 50%;
    border: 1px solid black;
`

const StyledP = styled.p`
    font-size: 1.2rem;
    ${props => (props.type === "key" ? "color: #2D080A;" : null)};
    ${props => (props.type === "value" ? "color: #72705B;" : null)};
`

export default function Character(props) {
    const { person, open } = props

    return (
        <StyledDiv>
            <h3>{ person.name }</h3>
            <StyledBtn type="open" onClick={ () => open(person.name) }>See Details</StyledBtn>
        </StyledDiv>
    )
}