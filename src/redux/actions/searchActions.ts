export const setSearchResults = (results: number) => {
    return {
        type: 'SET_SEARCH_RESULTS',
        payload: results
    };
};