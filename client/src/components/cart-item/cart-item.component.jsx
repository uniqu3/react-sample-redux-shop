import React from 'react';

import {
    CartItemContainer,
    CartItemImg,
    CartItemDetails,
    CartItemName,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <CartItemImg src={imageUrl} alt="item" />
        <CartItemDetails>
            <CartItemName>{name}</CartItemName>
            <span>
                {quantity} x ${price}
            </span>
        </CartItemDetails>
    </CartItemContainer>
);

export default CartItem;
