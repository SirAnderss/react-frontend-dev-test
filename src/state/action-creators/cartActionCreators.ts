import { Dispatch } from 'redux';
import { CartActionType } from 'state/action-types/cartActionTypes';
import { Action } from 'state/actions/cartActions';

export const addProductToCart =
  (product: TProduct, quantity: number) =>
  (dispatch: Dispatch<Action>): void => {
    const newCartItem: TCartItem = product;

    newCartItem.quantity = quantity;

    dispatch({
      type: CartActionType.ADD,
      payload: newCartItem,
    });
  };

export const clearCart =
  () =>
  (dispatch: Dispatch<Action>): void => {
    dispatch({
      type: CartActionType.CLEAR,
      payload: [],
    });
  };

export const updateProductsInCart =
  (products: TCartItem[]) =>
  (dispatch: Dispatch<Action>): void => {
    dispatch({
      type: CartActionType.UPDATE,
      payload: products,
    });
  };

export const dropProductsFromCart =
  (products: TCartItem[]) =>
  (dispatch: Dispatch<Action>): void => {
    dispatch({
      type: CartActionType.REMOVE,
      payload: products,
    });
  };

export const setCartQuantity =
  (quantity: number) =>
  (dispatch: Dispatch<Action>): void => {
    dispatch({
      type: CartActionType.QUANTITY,
      payload: quantity,
    });
  };

export const openCart =
  (value: boolean) =>
  (dispatch: Dispatch<Action>): void => {
    dispatch({
      type: CartActionType.ACTIVE,
      payload: value,
    });
  };
