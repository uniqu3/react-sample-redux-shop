import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
    selectCartItems,
    selectCartTotal,
} from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

//import './checkout.styles.scss';
import {
    CheckoutPageContainer,
    CheckoutHeader,
    HeaderBlock,
    TotalContainer,
    TestWarning,
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
    <CheckoutPageContainer>
        <CheckoutHeader>
            <HeaderBlock>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
            </HeaderBlock>
        </CheckoutHeader>
        {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <TotalContainer>
            <span>Total: ${total}</span>
        </TotalContainer>
        <TestWarning>
            <small>Please use following test credit card for payments</small>
            <br />
            Card number: 4242 4242 4242 4242
            <br />
            Exp: 01/22 CVV: 123
        </TestWarning>
        <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
