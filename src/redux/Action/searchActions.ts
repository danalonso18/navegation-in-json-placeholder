export const setSearchResultsPost = (resultsPost: number) => {
    console.log('results',resultsPost)
        return {
            type: 'SET_SEARCH_RESULTSPOST',
            payload: resultsPost
        };
    }

export const setSearchResultsAdm = (resultsAdm:number) => {
    console.log('resultsAdm',resultsAdm)
    return {
        type: 'SET_SEARCH_RESULTSADM',
        payload: resultsAdm
    };
};