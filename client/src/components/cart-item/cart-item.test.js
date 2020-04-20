import React from 'react';
import { shallow } from 'enzyme';
import CartItem from './cart-item.component';

it('should render CartItem component', () => {
    const mockItem = {
        imageUrl: 'www.image-url.com',
        price: 10,
        name: 'hats',
        quantity: 2,
    };

    expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot();
});
