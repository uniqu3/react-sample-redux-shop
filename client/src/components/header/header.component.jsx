import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
} from './header.styles';
import { ReactComponent as Logo } from '../../assets/crown.svg';

export const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>
        <LogoContainer to="/" className="logo-container">
            <Logo className="logo" />
        </LogoContainer>

        <OptionsContainer>
            <OptionLink className="option" to="/shop">
                Shop
            </OptionLink>
            <OptionLink className="option" to="/contact">
                Contact
            </OptionLink>
            {currentUser ? (
                <OptionLink as="div" onClick={signOutStart}>
                    Sign out
                </OptionLink>
            ) : (
                <OptionLink className="option" to="/signin">
                    Sign in
                </OptionLink>
            )}
            <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
    signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
