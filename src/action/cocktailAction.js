import { getRandomCocktails, getPopularCocktails, getLatestCocktails, searchCocktails, getDetail} from '../api';
import axios from 'axios'

export const loadCocktails = () => async (dispatch) => {
    // dispatch({
    //     type: 'LOADING_HOME'
    // })
    const randomCocktails = await axios.get(getRandomCocktails());
    const popularCocktails = await axios.get(getPopularCocktails());
    const latestCocktails = await axios.get(getLatestCocktails());
    
    dispatch({
        type: 'GET_COCKTAILS',
        payload: {
            random: randomCocktails.data.drinks,
            popular: popularCocktails.data.drinks,
            latest: latestCocktails.data.drinks
        }
    })
}

export const loadSearched = (name) => async (dispatch) => {
    const searchedCocktail = await axios.get(searchCocktails(name));
    dispatch({
        type: 'GET_SEARCHED',
        payload: {
            searched: searchedCocktail.data.drinks
        }
    })
}

export const loadDetail = (id) => async (dispatch) => {
    
    const detail = await axios.get(getDetail(id));
    dispatch({
        type: 'GET_DETAIL',
        payload: {
            detail: detail.data.drinks
        }
    })
}





