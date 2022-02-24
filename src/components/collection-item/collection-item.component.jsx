import React from 'react';
import { connect } from 'react-redux'
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';
import { useHistory } from 'react-router-dom';
require('date-utils');

const CollectionItem = (props) => {
  const { id,subject,customer_id,input_amount,output_amount, created_at,input_currency_code,output_currency_code,input_currency_symbol,output_currency_symbol} = props;
  const currencyFormatter = require('currency-formatter');
  const input_amount_currency = currencyFormatter.format(input_amount, { code: input_currency_code })
  const output_amount_currency = currencyFormatter.format(output_amount, { code: output_currency_code })

  let date_ob = new Date(created_at);
  date_ob.setHours(date_ob.getHours() - 2);
  const created = new Date(date_ob).toLocaleString();

    let history = useHistory();
    const redirect = () => {
        history.push("/transaction/"+id, id)
    }

    return (
              <tr>
                <td >{id}</td>
                <td align="center">{customer_id}</td>
                <td align="center">{subject}</td>
                <td align="center">{input_amount_currency}</td>
                <td align="center">{input_currency_symbol}</td>
                <td align="center">{input_currency_code}</td>
                <td align="center">{output_amount_currency}</td>
                <td align="center">{output_currency_symbol}</td>
                <td align="center">{output_currency_code}</td>
                <td align="center">{created }</td>
                <td align="center">
                < CustomButton onClick={redirect} inverted className="inverted  custom-button transactions-button"> View </CustomButton>
                </td>
              </tr>


    )
}


const mapDispatchToProps = dispatch => ({
    //addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
