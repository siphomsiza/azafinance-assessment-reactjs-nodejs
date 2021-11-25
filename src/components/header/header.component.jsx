import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';



import { ReactComponent as Logo } from '../../assets/crown.svg';
// import { selectCartHidden } from '../../redux/cart/cart.selectors';
// import { selectCurrectUser } from '../../redux/user/user.selectors';
// import CartIcon from '../cart-icon/cart-icon.component'
// import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';
// import './node_modules/font-awesome/css/font-awesome.min.css';

const Header = ({ }) => (
    <div className="head">
    </div>
)

const mapStateToProps = createStructuredSelector({
    // currentUser: selectCurrectUser,
    // hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
