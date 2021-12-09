import { CartActionType } from 'state/action-types/cartActionTypes';

interface AddCartProductAction {
  type: CartActionType.ADD;
  payload: TCartItem;
}

interface RemoveCartProductAction {
  type: CartActionType.REMOVE;
  payload: TCartItem[] | [];
}

interface UpdateCartProductAction {
  type: CartActionType.UPDATE;
  payload: TCartItem[];
}

interface ClearCartProductAction {
  type: CartActionType.CLEAR;
  payload: [];
}

interface QuantityCartAction {
  type: CartActionType.QUANTITY;
  payload: number;
}

interface ActiveCartAction {
  type: CartActionType.ACTIVE;
  payload: boolean;
}

export type Action =
  | AddCartProductAction
  | RemoveCartProductAction
  | UpdateCartProductAction
  | ClearCartProductAction
  | QuantityCartAction
  | ActiveCartAction;
