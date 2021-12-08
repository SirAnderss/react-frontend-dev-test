import { Dispatch } from 'redux';
import { ActionType } from 'state/action-types';
import { Action } from 'state/actions';

export const addProductToCart =
  (product: TProduct, quantity: number) =>
  (dispatch: Dispatch<Action>): void => {
    const newCartItem: TCartItem = product;

    newCartItem.quantity = quantity;

    dispatch({
      type: ActionType.ADD,
      payload: newCartItem,
    });
  };

export const clearCart =
  () =>
  (dispatch: Dispatch<Action>): void => {
    dispatch({
      type: ActionType.CLEAR,
      payload: [],
    });
  };

export const updateProductsInCart =
  (products: TCartItem[]) =>
  (dispatch: Dispatch<Action>): void => {
    dispatch({
      type: ActionType.UPDATE,
      payload: products,
    });
  };

export const dropProductsFromCart =
  (products: TCartItem[]) =>
  (dispatch: Dispatch<Action>): void => {
    dispatch({
      type: ActionType.REMOVE,
      payload: products,
    });
  };

export const setCartQuantity =
  (quantity: number) =>
  (dispatch: Dispatch<Action>): void => {
    dispatch({
      type: ActionType.QUANTITY,
      payload: quantity,
    });
  };

export const openCart =
  (value: boolean) =>
  (dispatch: Dispatch<Action>): void => {
    dispatch({
      type: ActionType.ACTIVE,
      payload: value,
    });
  };
