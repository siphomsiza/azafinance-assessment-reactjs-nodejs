import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './header.styles.scss';

const Header = () => (
    <div className="head"></div>
)

const mapStateToProps = createStructuredSelector({
    // currentUser: selectCurrectUser,
    // hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
