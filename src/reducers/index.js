import {combineReducers} from 'redux'
import cocktailReducer from './cocktailReducer';


const rootReducer = combineReducers({
    cocktails: cocktailReducer
})

export default rootReducer;
