export const setSearchResults = (resultsPost: number,resultsAdm:number) => {
    console.log('results',resultsPost)
    if('SET_SEARCH_RESULTSPOST'){
        return {
            type: 'SET_SEARCH_RESULTSPOST',
            payload: resultsPost
        };
    }
    return {
        type: 'SET_SEARCH_RESULTSADM',
        payload: resultsAdm
    };
};
