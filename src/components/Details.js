import React, { useState, useEffect } from 'react'
import axios from "axios"
import styled from "styled-components"
import { Button } from "reactstrap"

import { BASE_URL } from "../App"

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid ${props => props.theme.primaryColor};
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
    /* border: 1px solid red; */
`

const StyledUL = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${props => props.theme.primaryColor};
    width: 50%;
    /* border: 1px solid black; */
`

const StyledP = styled.p`
    font-size: 1.2rem;
    ${props => (props.type === "key" ? "color: #2D080A;" : null)};
    /* ${props => (props.type === "value" ? "color: #72705B;" : null)}; */
    ${props => (props.type === "value" ? "color: #004225;" : null)};
`

export const StyledBtn = styled(Button)`
    font-size: 1.3rem;
    background-color: ${props => props.theme.tertiaryColor};
    color: ${props => props.theme.white};
    border: 3px solid ${props => props.theme.primaryColor};
    border-radius: 10px;
    margin: 10px 0;
    padding: ${props => props.theme.btnPadding};
    &:hover {
        opacity: 80%;
        transform: scale(1.2);
        animation-duration: 0.3s;
    }

    ${props =>  (props.type === "open" ? `background-color: #2D080A;` : null )}
    ${props =>  (props.type === "close" ? `background-color: #72705B;` : null )}
`

export default function Details(props) {
    const { charID, close } = props
    const [details, setDetails] = useState(null)

    useEffect(() => {
        axios.get(`${BASE_URL}people/${charID}`)
            .then(resp => resp.data)
            .then(details => setDetails(details))
            // .then(details => console.log(details))
            .catch(err => { debugger })
    }, [charID])



    return (
            <StyledDiv>
                <h3>Details</h3>
                { details && 
                <>
                    <h2>{ details.name }</h2>
                    <StyledSubDiv>
                        <StyledUL>
                            <li><StyledP type="key">Height:  </StyledP> <StyledP type="value">{ details.height } cm</StyledP></li>
                            <li><StyledP type="key">Mass:  </StyledP> <StyledP type="value">{ details.mass } kg</StyledP></li>
                            <li><StyledP type="key">Hair Color:  </StyledP> <StyledP type="value">{ details.hair_color}</StyledP></li>
                            </StyledUL>
                            <StyledUL>
                            <li><StyledP type="key">Skin Color:  </StyledP> <StyledP type="value">{ details.skin_color}</StyledP></li>
                            <li><StyledP type="key">Eye Color:  </StyledP> <StyledP type="value">{ details.eye_color}</StyledP></li>
                            <li><StyledP type="key">Gender:  </StyledP> <StyledP type="value">{ details.gender }</StyledP></li>
                        </StyledUL>
                    </StyledSubDiv>
                </>
                }
                <StyledBtn type="close" onClick={ close }>Close</StyledBtn>
            </StyledDiv>
    )
}
