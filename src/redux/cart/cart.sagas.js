import { all, call, takeLatest, put } from 'redux-saga/effects';

import UserActionTyps from '../user/user.types';
import { clearCart } from './cart.actions';

export function* clearCartOnSignOut() {
    yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTyps.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
    yield all([call(onSignOutSuccess)]);
}
