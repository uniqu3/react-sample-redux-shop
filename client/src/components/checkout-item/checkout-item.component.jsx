import React from 'react';
import { connect } from 'react-redux';

import {
    clearItemFromCart,
    addItem,
    removeItem,
} from '../../redux/cart/cart.actions';

import {
    CheckoutItemContainer,
    CheckoutItemImageContainer,
    CheckoutItemImg,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { imageUrl, name, price, quantity } = cartItem;

    return (
        <CheckoutItemContainer>
            <CheckoutItemImageContainer>
                <CheckoutItemImg src={imageUrl} alt="item" />
            </CheckoutItemImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={() => addItem(cartItem)}>&#10095;</div>
            </QuantityContainer>
            <TextContainer>${price}</TextContainer>
            <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
                &#10005;
            </RemoveButtonContainer>
        </CheckoutItemContainer>
    );
};

const mapDispatchToProps = (dispatch) => ({
    clearItem: (item) => dispatch(clearItemFromCart(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
