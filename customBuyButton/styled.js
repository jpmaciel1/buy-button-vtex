import styled from "styled-components";


export const Button = styled.button `
    width: ${props => props.width};
    height: ${props => props.height};
    background: ${props => props.background};
    border: ${props => props.border};
    border-radius: ${props => props.borderRadius};
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    font-family: ${props => props.fontFamily};
    display: flex;
    justify-content: space-between;
    align-items: center;
    :hover {
        cursor: pointer;
        background: ${props => props.backgroundHover};
        border: ${props => props.borderHover};
        color: ${props => props.colorHover};
    }
    
`

export const Label = styled.label `
margin: 0 auto;
    :hover {
        cursor: pointer;
    }
`
