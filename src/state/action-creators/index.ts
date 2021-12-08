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

// export const updateProductsInCart = (product: TProduct) => (dispatch: Dispatch<Action>, getState): void => {

//   dispatch({
//     type: ActionType.UPDATE,
//     payload: product,
//   });
// }

export const openCart =
  (value: boolean) =>
  (dispatch: Dispatch<Action>): void => {
    dispatch({
      type: ActionType.ACTIVE,
      payload: value,
    });
  };
