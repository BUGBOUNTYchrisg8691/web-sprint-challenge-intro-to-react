// Write your Character component here
import React from 'react'
import { ids } from "../App"
import styled from "styled-components"

import { StyledBtn } from "./Details"

export const StyledDiv = styled.div`
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

export default function Character(props) {
    const { info, action } = props

    return (
        <StyledDiv>
            { info.name }
            <StyledBtn onClick={ () => action(ids[info.name]) }>Get Details</StyledBtn>
        </StyledDiv>
    )
}
