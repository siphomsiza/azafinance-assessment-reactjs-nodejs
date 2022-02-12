import React, {useReducer, useEffect } from 'react';

import { initialState, transactionReducer } from '../../redux/reducer/transaction';
import { useHistory } from 'react-router-dom';
import CustomButton from '../../components/custom-button/custom-button.component';
import './transaction.styles.scss'
require('date-utils');

const Transaction = (props) => {

    const [state, dispatch] = useReducer(transactionReducer, initialState);
    let history = useHistory();
    const redirect = () => {
        history.push("/")
    }
    const post_redirect = () => {
        history.push("/transactions/new")
    }

    useEffect(() => {
        dispatch({
            type: "SEARCH_TRANSACTION_REQUEST"
        });
         const transaction_id = props.location.state;
        fetch(`https://corsanywhere.herokuapp.com/https://azafinance-assessment.herokuapp.com/transactions/${transaction_id}`)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    dispatch({
                        type: "SEARCH_TRANSACTION_SUCCESS",
                        payload: data
                    });
                } else {
                    dispatch({
                        type: "SEARCH_TRANSACTION_FAILURE",
                        error: data.Error
                    });
                }
            });

    }, []);

    const { transaction, loading} = state;
    const { id,subject,customer_id,amount, created_at,currency_code,currency_symbol} = transaction;

    const currencyFormatter = require('currency-formatter');
    const amount_currency = currencyFormatter.format(amount, { code: currency_code })
    let date_ob = new Date(created_at);
    date_ob.setHours(date_ob.getHours() - 2);
    const created = new Date(date_ob).toLocaleString();

    return (
      <div className="collection-preview">
        <div className="preview">
          <div className="loading-container">
            {loading === true ? <div className="loading">Loading...</div> : ''}
          </div>
          <h5>Transaction - {transaction.subject}</h5>
          <div className="artist-item">
            <table class="table table-dark">
              <tr>
                <th scope="col">ID</th>
                <td>{id}</td>
              </tr>
              <tr>
                <th scope="col">Customer ID</th>
                <td>{customer_id}</td>
              </tr>
              <tr>
                <th scope="col">Subject</th>
                <td>{subject}</td>
              </tr>
              <tr>
                <th scope="col">Amount</th>
                <td>{amount_currency}</td>
              </tr>
              <tr>
                <th scope="col">Currency Symbol</th>
                <td>{currency_symbol}</td>
              </tr>
              <tr>
                <th scope="col">Currency Code</th>
                <td>{currency_code}</td>
              </tr>
              <tr>
              <th scope="col">Created At</th>
                <td>{created}</td>
              </tr>
            </table>
          </div>
          <CustomButton onClick={redirect} inverted>List Transactions</CustomButton>
          <CustomButton onClick={post_redirect} inverted className="inverted  custom-button new-transaction">New Transaction</CustomButton>
        </div>
      </div>
    )
}
export default Transaction;
