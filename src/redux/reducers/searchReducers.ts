const initialState = {
    searchReducer: 0
}

const searchReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_SEARCH_RESULTS':
            return {
                ...state,
                searchResults: action.payload
            };
        default:
            return state;
    }
}

export default searchReducer