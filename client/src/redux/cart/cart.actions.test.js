import { CartActionTypes } from './cart.types';
import {
    toggleCartHidden,
    addItem,
    removeItem,
    clearItemFromCart,
    clearCart,
} from './cart.actions';

const mockItem = {
    id: 1,
};

describe('toggleCartHidden action', () => {
    it('should create toggleCartHidden action', () => {
        expect(toggleCartHidden().type).toEqual(
            CartActionTypes.TOGGLE_CART_HIDDEN
        );
    });
});

describe('addItem action', () => {
    it('should create the addItem action', () => {
        const action = addItem(mockItem);

        expect(action.type).toEqual(CartActionTypes.ADD_ITEM);
        expect(action.payload).toEqual(mockItem);
    });
});

describe('removeItem action', () => {
    it('should create removeItem action', () => {
        const action = removeItem(mockItem);

        expect(action.type).toEqual(CartActionTypes.REMOVE_ITEM);
        expect(action.payload).toEqual(mockItem);
    });
});

describe('clearItemFromCart action', () => {
    it('should create the clearItemFromCart action', () => {
        const action = clearItemFromCart(mockItem);

        expect(action.type).toEqual(CartActionTypes.CLEAR_ITEM_FROM_CART);
        expect(action.payload).toEqual(mockItem);
    });
});

describe('clearCart action', () => {
    it('should create clearCart action', () => {
        expect(clearCart().type).toEqual(CartActionTypes.CLEAR_CART);
    });
});
