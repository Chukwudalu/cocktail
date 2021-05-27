import React, {useEffect} from 'react';
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { loadDetail } from '../action/cocktailAction'

const Detail = () => {
    const dispatch = useDispatch()
    const detail = useSelector((state) => (state.cocktails.detail));
    const det = detail[0];
    const location = useLocation();
    const pathId = location.pathname.split('/')[2]
    useEffect(() => {
        dispatch(loadDetail(pathId))
    },[dispatch])
    return (
        <>
           {det&&(
                <StyledDetail>
                    <div className='name-cat'>
                        <h4>{det.strDrink}</h4>
                        <h4>{det.strCategory}</h4>
                    </div>
                    <div className='tag-alc'>
                        <h4>{det.strAlcoholic}</h4>
                    </div>
                    <div className='ing'>
                        <h3 >Ingredients</h3>
                        <p>{det.strIngredient1}, {det.strIngredient2}, {det.strIngredient3}</p>
                    </div>
                    <div className='instructions'>
                        <h3>Instruction</h3>
                        <p>{det.strInstructions}</p>
                    </div>
                    <div className='image'>
                        <img src={det.strDrinkThumb} alt='images' className='image'/>
                    </div>
                </StyledDetail>
                    
            )}
        </>
    )
}




const StyledDetail = styled(motion.div)`
    width: 70%;
    margin: 100px auto;
    
    .name-cat{
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    .tag-alc{
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    .ing{
        display: flex;
        flex-direction: column;
        align-items: center;

        h3{
            padding: 30px 0
        }
        p{
            padding-bottom: 30px
        }
    }

    .instructions{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        

        h3{
            padding: 30px 0
        }
        p{
            padding-bottom: 30px
        }
        
        
    }
    
    .image{
        width: 60%;
        margin: auto;
        height: 400px;

        img{
            width: 100%;
            object-fit: cover;
        }
    }

   
`

export default Detail;