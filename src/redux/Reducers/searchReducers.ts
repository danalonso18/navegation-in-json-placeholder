const initialState = {
    searchReducer: 0
}

const searchReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_SEARCH_RESULTSPOST':
            return {
                ...state,
                searchResultsPost: action.payload
            };
        case 'SET_SEARCH_RESULTSADM':
            return {
                ...state,
                searchResultsAdm: action.payload
            };
        default:
            return state;
    }
}

export default searchReducer