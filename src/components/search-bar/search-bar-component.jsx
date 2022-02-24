import React, { useState } from "react";
import './search-bar-styles.scss';
import { useHistory } from 'react-router-dom';
import CustomButton from '../../components/custom-button/custom-button.component';

const SearchBar = (props) => {
    const [subjectValue, setSubjectValue] = useState();
    const [amountValue, setAmountValue] = useState();
    const [amountValueOutput, setAmountValueOutput] = useState();
    const [currencyValue, setCurrencyValue] = useState();
    const [currencyValueOutput, setCurrencyValueOutput] = useState();
    const [customerIdValue, setCustomerIdValue] = useState();
    const [currencySymbol, setCurrencySymbol] = useState();
    const [currencySymbolOutput, setCurrencySymbolOutput] = useState();
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

    const handlesetCurrencyOutputChanges = (e) => {
        //console.log(amountValue)
        setAmountValueOutput(amountValue);
        setCurrencyValueOutput(e.target.value);
        for (let i = 0; i < currencies.length; i++) {
            if (currencies[i].code === e.target.value){
              setCurrencySymbolOutput(currencies[i].symbol);
            }
          }

        document.getElementsByName("output-currency")[0].className = "form-control"
        document.getElementById('output-currency-invalid').style.display="none"
    }
    const handleAmountInputChanges = (e) => {
        setAmountValue(e.target.value);
        document.getElementsByName("amount")[0].className = "form-control"
        document.getElementById('amount-invalid').style.display="none"
    }

    const handleAmountOutputChanges = (e) => {
        setAmountValueOutput(e.target.value);
        document.getElementsByName("output-amount")[0].className = "form-control"
        document.getElementById('output-amount-invalid').style.display="none"
    }

    const handlesetCustomerIdInputChanges = (e) => {
        setCustomerIdValue(e.target.value);
        document.getElementsByName("customer_id")[0].className = "form-control"
        document.getElementById('customer_id-invalid').style.display="none"
    }
    const callSearchFunction = (e) => {
        e.preventDefault();
        if ( ((typeof subjectValue === 'undefined') || subjectValue === '') || ((typeof currencyValue === 'undefined') || currencyValue === '') || ((typeof amountValue === 'undefined') || amountValue === '') || ((typeof amountValueOutput === 'undefined') || amountValueOutput === '') ||((typeof currencyValueOutput === 'undefined') || currencyValueOutput === '') ||((typeof customerIdValue === 'undefined') || customerIdValue === '') ){
            if ((typeof subjectValue === 'undefined') || subjectValue === '')
            {
              document.getElementsByName("subject")[0].className = "form-control was-validated"
              document.getElementById('subject-invalid').style.display="block"
            }
            if ((typeof currencyValue === 'undefined') || currencyValue === '') {
              document.getElementsByName("currency")[0].className = "form-control was-validated"
              document.getElementById('currency-invalid').style.display="block"
            }

            if ((typeof currencyValueOutput === 'undefined') || currencyValueOutput === '') {
              document.getElementsByName("output-currency")[0].className = "form-control was-validated"
              document.getElementById('output-currency-invalid').style.display="block"
            }

            if ((typeof amountValue === 'undefined') || amountValue === '') {
              document.getElementsByName("amount")[0].className = "form-control was-validated"
              document.getElementById('amount-invalid').style.display="block"
            }
            if ((typeof amountValueOutput === 'undefined') || amountValueOutput === '') {
              document.getElementsByName("output-amount")[0].className = "form-control was-validated"
              document.getElementById('output-amount-invalid').style.display="block"
            }

            if ((typeof customerIdValue === 'undefined') || customerIdValue === '') {
              document.getElementsByName("customer_id")[0].className = "form-control was-validated"
              document.getElementById('customer_id-invalid').style.display="block"
            }

        }
        else
        {
          props.search({transaction: {subject: subjectValue,input_amount: amountValue,output_amount: amountValueOutput  ,customer_id: customerIdValue,input_currency_code: currencyValue,output_currency_code: currencyValueOutput ,input_currency_symbol: currencySymbol,output_currency_symbol: currencySymbolOutput}});
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
              <label class="form-label" for="exampleFormControlInput1">Input Currency</label>
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
              <label class="form-label" for="exampleFormControlInput1">Input Amount</label>
              <div class="input-group mb-3">
              <input class="input-group-text currency-symbol" id="currency-symbol" value={currencySymbol} name="currency_symbol" disabled="true" />
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
              <label class="form-label" for="exampleFormControlInput1">Output Currency</label>
              <select name="output-currency" className="form-control form-select form-select-lg mb-3" type="text"  onChange={handlesetCurrencyOutputChanges} >
               <option value='' >Select output currency</option>
              {

                currencies.filter((item, idx) => idx > 5)
                    .map((item, index) => (
                       <option value={item.code} >{item.code +" -- "+item.symbol}</option>
                    ))
              }
              </select>
              <div id="output-currency-invalid" class="invalid-feedback">Please provide a valid output currency.</div>
              <br/>
              <label class="form-label" for="exampleFormControlInput1">Output Amount</label>
              <div class="input-group mb-3">
              <input class="input-group-text currency-symbol" id="currency-symbol" value={currencySymbolOutput} name="currency_symbol_output" disabled="true" />
              <input
                  className='form-control currency-amount'
                  name="output-amount"
                  value={amountValueOutput}
                  onChange={handleAmountOutputChanges}
                  type="text"
                  disabled="true"
              />
              <div id="output-amount-invalid" class="invalid-feedback">Please provide a valid output amount.</div>
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
