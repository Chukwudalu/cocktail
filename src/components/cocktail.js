import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { popUp } from '../animations'
import {motion} from 'framer-motion'


const Cocktail = ({ id, name, img, category }) => {
    return (
        <StyledCocktail variants={popUp} initial='hidden' animate='show'>
            <div className='container'>
                <img src={img} alt='images' className='image'/>
                <Link to={`/cocktail/${id}`} className='button btn'>view</Link>
            </div>
            
            <div className='text'>
                <p>{name}</p>
                <p>{category}</p>
            </div>
        </StyledCocktail>
    )
}


const StyledCocktail = styled(motion.div)`
    height: 300px;
    margin: 30px 0;
    box-shadow: 0px 4px 8px rgba(0,0,0,0.4);
    cursor: pointer;
    border-radius: 20px;
    overflow:hidden;
    transition: transform 0.6s ease-out;
    backface-visibility:hidden;
    position: relative;
    opacity: 1;

    &:hover{
        transform: translateY(-20px)
    }
    .text{
        background: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 20px;
        font-size: calc(1rem + 1vw)
    }
    .container{
        width: 100%;
        height: 75%;
        
    }
    .btn:hover{
        background: linear-gradient(45deg, #f48c06, #d00000);
        color: white;
    }
    .image{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .button{
        position: absolute;
        top: 50%;
        left:50%;
        transform: translate(-50%, -60%);
        -ms-transform: translate(-50%, -60%);
        opacity: 0;
    }

    &:hover .image{
        opacity: 0.3
    }

    &:hover a{
        opacity: 1;
    }
`;

export default Cocktail
