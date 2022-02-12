export const initialState = {
    loading: false,
    transaction: [],
    errorMessage: null
};

export const transactionReducer = (state, action) => {
    switch (action.type) {
        case "SEARCH_TRANSACTION_REQUEST":
            return {
                ...state,
                loading: true,
                errorMessage: null
            };
        case "SEARCH_TRANSACTION_SUCCESS":
            return {
                ...state,
                loading: false,
                transaction: action.payload
            };
        case "SEARCH_TRANSACTION_FAILURE":
            return {
                ...state,
                loading: false,
                errorMessage: action.error
            };
        case "SEARCH_PLAYLIST_REQUEST":
            return {
                ...state,
                loading: true,
                errorMessage: null
            };
        case "SEARCH_PLAYLIST_SUCCESS":
            return {
                ...state,
                loading: false,
                playlist: action.payload
            };
        case "SEARCH_PLAYLIST_FAILURE":
            return {
                ...state,
                loading: false,
                errorMessage: action.error
            };
        default:
            return state;
    }
};
export default transactionReducer
