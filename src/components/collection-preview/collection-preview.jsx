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
                      <td align="center" width="5%;"><strong>Customer ID</strong></td>
                      <td align="center" width="10%;"><strong>Subject</strong></td>
                      <td align="center" width="10%;"><strong>Input Amount</strong></td>
                      <td align="center" width="10%;"><strong>Input Symbol</strong></td>
                      <td align="center" width="10%;"><strong>Input Code</strong></td>
                      <td align="center" width="10%;"><strong>Output Amount</strong></td>
                      <td align="center" width="10%;"><strong>Output Symbol</strong></td>
                      <td align="center" width="10%;"><strong>Output Code</strong></td>
                      <td align="center" width="10%;"><strong>Created At</strong></td>
                      <td align="center" width="30px;"><strong>Actions</strong></td>
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
