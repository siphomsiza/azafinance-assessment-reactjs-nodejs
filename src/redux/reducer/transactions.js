export const initialState = {
    loading: false,
    transactions: [],
    errorMessage: null
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "SEARCH_MOVIES_SUCCESS":
            return {
                ...state,
                loading: false,
                transactions: action.payload
            };
        case "SEARCH_TRANSACTIONS_REQUEST":
            return {
                ...state,
                loading: true,
                errorMessage: null
            };
        case "SEARCH_TRANSACTIONS_SUCCESS":
            return {
                ...state,
                loading: false,
                transactions: action.payload
            };
        case "SEARCH_TRANSACTIONS_FAILURE":
            return {
                ...state,
                loading: false,
                errorMessage: action.error
            };
        default:
            return state;
    }
};
export default reducer
