import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = (props) => (

    <div className="collection-preview">
        <div className="preview">
            <h5>Transactions</h5>
            <table className="table">
                <thead>
                    <tr>
                      <td width="5%;"><strong>ID</strong></td>
                      <td align="center" width="10%;"><strong>Customer ID</strong></td>
                      <td align="center" width="20%;"><strong>Subject</strong></td>
                      <td align="center" width="10%;"><strong>Amount</strong></td>
                      <td align="center" width="5%;"><strong>Currency Symbol</strong></td>
                      <td align="center" width="20%;"><strong>Currency Code</strong></td>
                      <td align="center" width="20%;"><strong>Created At</strong></td>
                      <td align="center" width="20%;"><strong>Actions</strong></td>
                    </tr>
                </thead>
                <tbody>
                    {
                      //console.log("Date", props.data)
                      props.data.map(({ v, ...otherItemProps }) => (
                        <CollectionItem key={v} {...otherItemProps} />
                      ))
                    }
                </tbody>
            </table>
        </div>
    </div>
)

export default CollectionPreview;
