import React, {useReducer} from 'react';

import { initialState, transactionReducer } from '../../redux/reducer/transaction';
import { useHistory } from 'react-router-dom';
import SearchBar from '../../components/search-bar/search-bar-component';
import './transaction.styles.scss'
require('date-utils');

const PostTransaction = (props) => {

    const [state, dispatch] = useReducer(transactionReducer, initialState);
    let history = useHistory();
    const { loading} = state;

    const search = async (transaction_params) => {
        dispatch({
            type: "SEARCH_ARTISTS_REQUEST"
        });

        fetch(`https://corsanywhere.herokuapp.com/https://azafinance-assessment.herokuapp.com/transactions`, {method: 'POST',body: JSON.stringify(transaction_params)})
            .then(response => response.json())
            .then(data => {
                if (data) {
                    dispatch({
                        type: "SEARCH_ARTISTS_SUCCESS",
                        payload: data
                    });
                } else {
                    dispatch({
                        type: "SEARCH_ARTISTS_FAILURE",
                        error: data.Error
                    });
                }
                if (data.id){
                  state.transaction = data
                  const { id} = state.transaction;
                  history.push("/transaction/"+id, id)
                }
            });
    };


    return (
      <div className="collection-preview">
        <div className="preview">
          <div className="loading-container">
            {loading === true ? <div className="loading">Loading...</div> : ''}
          </div>
          <h5>Transaction - New</h5>
          <div className="artist-item transaction-form">
             <SearchBar search={search}/>
          </div>
        </div>
      </div>
    )
}
export default PostTransaction;
