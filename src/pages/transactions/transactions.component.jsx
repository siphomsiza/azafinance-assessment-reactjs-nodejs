import React, {useReducer, useEffect } from 'react';
import { initialState, reducer } from '../../redux/reducer/transactions';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import './transactions.styles.scss'
import { useHistory } from 'react-router-dom';
import CustomButton from '../../components/custom-button/custom-button.component';

const Home = (props) => {
    let history = useHistory();
    const post_redirect = () => {
        history.push("/transactions/new")
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch(`https://corsanywhere.herokuapp.com/https://azafinance-assessment.herokuapp.com/transactions`)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: "SEARCH_MOVIES_SUCCESS",
                    payload: data
                });
            });
    }, []);

    const { transactions, loading } = state;
    return (
            loading === true ? <div className="loading">Loading...</div>
            :

            <div className="shop-page">
                <>

                    {
                        <CollectionPreview data={transactions} />

                    }
                </>
                <CustomButton onClick={post_redirect} inverted className="inverted  custom-button new-transaction-l">New Transaction</CustomButton>
            </div>)

}

export default Home;
