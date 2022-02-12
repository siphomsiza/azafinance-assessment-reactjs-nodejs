import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './header.styles.scss';

const Header = () => (
    <div className="header"><h1>Header</h1></div>
)

const mapStateToProps = createStructuredSelector({
    // currentUser: selectCurrectUser,
    // hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
