import React, { useState } from "react";
import './search-bar-styles.scss';
import { useHistory } from 'react-router-dom';
import CustomButton from '../../components/custom-button/custom-button.component';

const SearchBar = (props) => {
    const [subjectValue, setSubjectValue] = useState();
    const [amountValue, setAmountValue] = useState();
    const [currencyValue, setCurrencyValue] = useState();
    const [customerIdValue, setCustomerIdValue] = useState();
    const [currencySymbol, setCurrencySymbol] = useState();
    const currencies = require('currency-formatter/currencies');

    let history = useHistory();
    const redirect = () => {
        history.push("/")
    }

    const handleSubjectInputChanges = (e) => {
        setSubjectValue(e.target.value);
        document.getElementsByName("subject")[0].className = "form-control"
        document.getElementById('subject-invalid').style.display="none"
    }

    const handlesetCurrencyInputChanges = (e) => {
        setCurrencyValue(e.target.value);
        for (let i = 0; i < currencies.length; i++) {
            if (currencies[i].code === e.target.value){
              setCurrencySymbol(currencies[i].symbol);
            }
          }

        document.getElementsByName("currency")[0].className = "form-control"
        document.getElementById('currency-invalid').style.display="none"
    }

    const handleAmountInputChanges = (e) => {
        setAmountValue(e.target.value);
        document.getElementsByName("amount")[0].className = "form-control"
        document.getElementById('amount-invalid').style.display="none"
    }

    const handlesetCustomerIdInputChanges = (e) => {
        setCustomerIdValue(e.target.value);
        document.getElementsByName("customer_id")[0].className = "form-control"
        document.getElementById('customer_id-invalid').style.display="none"
    }
    const callSearchFunction = (e) => {
        e.preventDefault();
        if ( ((typeof subjectValue === 'undefined') || subjectValue === '') || ((typeof currencyValue === 'undefined') || currencyValue === '') || ((typeof amountValue === 'undefined') || amountValue === '') ||((typeof customerIdValue === 'undefined') || customerIdValue === '') ){
            if ((typeof subjectValue === 'undefined') || subjectValue === '')
            {
              document.getElementsByName("subject")[0].className = "form-control was-validated"
              document.getElementById('subject-invalid').style.display="block"
            }
            if ((typeof currencyValue === 'undefined') || currencyValue === '') {
              document.getElementsByName("currency")[0].className = "form-control was-validated"
              document.getElementById('currency-invalid').style.display="block"
            }
            if ((typeof amountValue === 'undefined') || amountValue === '') {
              document.getElementsByName("amount")[0].className = "form-control was-validated"
              document.getElementById('amount-invalid').style.display="block"
            }
            if ((typeof customerIdValue === 'undefined') || customerIdValue === '') {
              document.getElementsByName("customer_id")[0].className = "form-control was-validated"
              document.getElementById('customer_id-invalid').style.display="block"
            }

        }
        else
        {
          props.search({transaction: {subject: subjectValue,amount: amountValue ,customer_id: customerIdValue,currency_code: currencyValue ,currency_symbol: currencySymbol}});
        }
    }

    return (

          <form className='form-form' id="transaction-form" >
              <label class="form-label" for="exampleFormControlInput1">Subject</label>
              <input
                  className='form-control'
                  name="subject"
                  value={subjectValue}
                  onChange={handleSubjectInputChanges}
                  type="text"
              />
              <div id="subject-invalid" class="invalid-feedback">Please provide a valid subject.</div>
              <br/>
              <label class="form-label" for="exampleFormControlInput1">Currency</label>
              <select name="currency" className="form-control form-select form-select-lg mb-3" type="text"  onChange={handlesetCurrencyInputChanges} >
               <option value='' >Select currency</option>
              {

                currencies.filter((item, idx) => idx > 5)
                    .map((item, index) => (
                       <option value={item.code} >{item.code +" -- "+item.symbol}</option>
                    ))
              }
              </select>
              <br/>
              <div id="currency-invalid" class="invalid-feedback">Please provide a valid currency.</div>
              <label class="form-label" for="exampleFormControlInput1">Amount</label>
              <div class="input-group mb-3">
              <input class="input-group-text currency-symbol" id="currency-symbol" value={currencySymbol} name="currency_symbol"/>
              <input
                  className='form-control currency-amount'
                  name="amount"
                  value={amountValue}
                  onChange={handleAmountInputChanges}
                  type="text"
              />
              <div id="amount-invalid" class="invalid-feedback">Please provide a valid amount.</div>
              </div>
              <br/>
              <label class="form-label" for="exampleFormControlInput1">Customer Id</label>
              <select name="customer_id" className="form-control form-select form-select-lg mb-3" onChange={handlesetCustomerIdInputChanges}>
              <option value='' >Select customer id</option>
              {
                [...Array(200).keys()].filter((item, idx) => idx > 0)
                    .map((item, index) => (
                       <option value={item}  >{item}</option>
                    ))
              }
              </select>
              <div id="customer_id-invalid" class="invalid-feedback">Please provide a valid customer id.</div>
              <br/>
              <input className='btn btn-primary' onClick={callSearchFunction} type="submit" value="Submit" />
              <hr/>
              <CustomButton onClick={redirect} inverted className="inverted  custom-button-form new-transaction-form">List Transactions</CustomButton>
          </form>


    );
}

export default SearchBar
