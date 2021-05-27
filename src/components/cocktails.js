import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {loadCocktails, loadSearched} from '../action/cocktailAction';
import Cocktail from './cocktail';
import styled from 'styled-components';
import { fadeIn} from '../animations'
import {motion} from 'framer-motion'


const Cocktails = () => {
   
    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    useEffect(() => {
        dispatch(loadCocktails()) 
    }, [dispatch])

    const inputHandler = (e) => {
        setInput(e.target.value)
    }

    const submitSearched = (e) => {
        e.preventDefault();
        dispatch(loadSearched(input));
        setInput('');
    }

    const clearSearched = (e) => {
        dispatch({ type: 'CLEAR_SEARCHED' });

    }
    
    const { popular, latest, random, searched, detail } = useSelector((state) => state.cocktails);
    const tenPopular = popular.slice(0, 6);
    const tenLatest = latest.slice(0, 6);
    const tenRandom = random.slice(0, 6);

    
    return (
        
        <CocktailList variants={fadeIn} initial='hidden' animate='show'>
            <motion.form className='inputdiv' variants={fadeIn} initial='hidden' animate='show'>
                <input type='search' placeholder='search cocktails' onChange={inputHandler} value={input}/>
                <button type='submit' onClick={submitSearched}>Search</button>

            </motion.form>
            
            {searched == null || !searched.length ? '' : (
                <div className='searched block'>
                    <h2>Searched</h2>
                    <button className='clear' onClick={clearSearched}>Clear</button>
                    <div className='cocktail type'>
                        {searched ? searched.map((pop) => (
                            <Cocktail
                                key={pop.idDrink}
                                id={pop.idDrink}
                                name={pop.strDrink}
                                category={pop.strCategory}
                                img={pop.strDrinkThumb}
                            />))
                            :
                            ''
                        }
                    </div>
                </div>
            )}
            
            
            
            <div className='popular block'>
                <h2>Popular</h2>
                <div className='cocktail type'>
                    {tenPopular ? tenPopular.map((pop) => (
                        <Cocktail
                            key={pop.idDrink}
                            id={pop.idDrink}
                            name={pop.strDrink}
                            category={pop.strCategory}
                            img={pop.strDrinkThumb}
                        />))
                        :
                        null 
                    }
                </div>
            </div>
            <div className='latest block'>
                <h2>Latest</h2>
                <div className='latest type'>
                    {tenLatest ? tenLatest.map((pop) => (
                        <Cocktail
                            key={pop.idDrink}
                            id={pop.idDrink}
                            name={pop.strDrink}
                            category={pop.strCategory}
                            img={pop.strDrinkThumb}
                        />))
                        :
                        null
                    }
                </div>
            </div>
            <div className='random block'>
                <h2>Random</h2>
                <div className='random type'>
                    {tenRandom ? tenRandom.map((pop) => (
                        <Cocktail
                            key={pop.idDrink}
                            id={pop.idDrink}
                            name={pop.strDrink}
                            category={pop.strCategory}
                            img={pop.strDrinkThumb}
                        />))
                        :
                        null
                    }
                </div>
            </div>
             
        </CocktailList>
    )
}


const CocktailList = styled(motion.section)`
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    

    .block{
        margin: 80px 0
    }

    .block h2{
        margin-bottom: 20px 
    }

    .type{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        text-align: center
    }

    .inputdiv{
       width: 50%;
       text-align: center;
       align-self: center;
   }
   input{
       width: 70%;
       font-size: calc(0.3rem + 1vw);
       border: none;
       padding: 0.5rem;
       outline: none;
       font-weight: bold;
       margin: 0 5px ;
       box-shadow: 0 0px 20px rgba(0,0,0,0.2);
   }

   button{
        font-size: calc(0.3rem + 1vw);
        border: none;
        padding: 0.8rem  calc(1.5rem + 1vw);
        cursor: pointer;
        background: linear-gradient(45deg, #f48c06, #d00000);
        color: white;
        font-family: 'Josefin Sans', sans-serif;
   }

   .clear{
        background: black;
        color: white;
   }

   button:hover{
       transform: scale(0.98)
   }


    @media screen and (max-width:1024px){
        .block h2{
            text-align: center
        }

        input{
           margin: 10px 0
       }
    }
`





export default Cocktails