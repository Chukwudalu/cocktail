import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <StyledNav>
            <h2><Link to='/'>Cocktail 'n' Grill</Link></h2>
            <ul>
                <li><Link to=''>Home</Link></li>
                <li><Link to=''>Contact</Link></li>
                <li><Link to=''>Reservations</Link></li>
            </ul>
        </StyledNav>
    )
    
}

const StyledNav = styled.nav`
    background: black;
    min-width: 100vw;
    color: white;
    min-height: 60px;
    padding: 0 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 1;

    h2 a{
        
        background-color: #f48c06;
        background-image: linear-gradient(45deg, #f48c06, #d00000);
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
    } 

    ul{
        display: flex;
        list-style: none;

        li{
            padding: 0 10px;
            font-size: calc(0.6rem + 1vw)
        }
        
        a{
            font-family: 'Josefin Sans', sans-serif; 
        }

        a:hover{
            background-color: #f48c06;
            background-image: linear-gradient(45deg, #f48c06, #d00000);
            background-size: 100%;
            -webkit-background-clip: text;
            -moz-background-clip: text;
            -webkit-text-fill-color: transparent; 
            -moz-text-fill-color: transparent;
        }

        a:focus{
            background-color: #f48c06;
            background-image: linear-gradient(45deg, #f48c06, #d00000);
            background-size: 100%;
            -webkit-background-clip: text;
            -moz-background-clip: text;
            -webkit-text-fill-color: transparent; 
            -moz-text-fill-color: transparent;
        }
    }

    @media screen and (max-width: 500px){
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h2{
            padding: 10px 0
        }

        ul{
            margin: 10px 0
        }
    }


`


export default Header