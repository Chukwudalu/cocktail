const currentState = {
    random: [],
    popular: [],
    latest: [],
    searched: [],
    detail: [],
    isLoading: true
}

const cocktailReducer = (state=currentState, action) => {
    switch (action.type) {
        case 'GET_COCKTAILS':
            return {
                ...state,
                random: action.payload.random,
                popular: action.payload.popular,
                latest: action.payload.latest,
                isLoading: false
            };
        
        case 'GET_DETAIL':
            return {
                ...state,
                detail: action.payload.detail,
                
            }
        
        case 'GET_SEARCHED':
            return {
                ...state,
                searched: action.payload.searched
            }
            
        case 'CLEAR_SEARCHED':
            return {
                ...state,
                searched:[]
            }
        // case 'LOADING_HOME':
        //     return {
        //         ...state,
        //         isLoading: true
        //     }
        default:
            return {...state};
    }
}

export default cocktailReducer;