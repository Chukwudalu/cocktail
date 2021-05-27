import React from 'react';
import styled from 'styled-components'

const Footer = () => {
    return (
        <StyledFooter>
            <h2>Developed by Jeremiah Okwuolisa &copy;</h2>
        </StyledFooter>
    )
    
}

const StyledFooter = styled.footer`
    min-height: 60px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    background-color: black;
    
    h2{
        background-color: #f48c06;
        background-image: linear-gradient(45deg, #f48c06, #d00000);
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
    }
`

export default Footer;