import React from 'react';
import styled from 'styled-components'
import heroimg from '../img/hero.jpg'

const Hero = () => {
    
    return (
        <StyledHero>
            <h3>Refreshing Taste</h3>
            <p>Cocktails 'n' Grills provides the most refreshing cocktails and <br/>
            beverages you can find which includes both alchoholic and non-alchoholic.
            </p>
        </StyledHero>
    )
}

const StyledHero = styled.section`
   height: 250px;
   min-width: 100vw;
   margin: 60px 0;
   text-align: center;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background: black;
   color: white;
   padding: 0 20px;

   h3{
        background-color: #f48c06;
        background-image: linear-gradient(45deg, #f48c06, #d00000);
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
        font-size: calc(2rem + 1vw);
        padding: 20px 0 30px 0;
        animation: h3Animation 1s ;
   }

   p{
        animation: pAnimation 1s;
        margin-bottom: 30px;
        line-height: 1.6;
        font-size: calc(1.1rem + 1vw)
   }
   
   @keyframes h3Animation{
       from{
            transform: translateX(500px)
       }
       to{
            transform: translateX(0)
       }
   }
   @keyframes pAnimation{
       from{
            transform: translateX(-500px);
       }
       to{
            transform: translateX(0);
       }
   }

   @media screen and (max-width:1024px){
       
   }


`

export default Hero;