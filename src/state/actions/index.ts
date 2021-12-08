import { ActionType } from 'state/action-types';

interface AddCartProductAction {
  type: ActionType.ADD;
  payload: TCartItem;
}

interface RemoveCartProductAction {
  type: ActionType.REMOVE;
  payload: TCartItem[] | [];
}

interface UpdateCartProductAction {
  type: ActionType.UPDATE;
  payload: TCartItem[];
}

interface ClearCartProductAction {
  type: ActionType.CLEAR;
  payload: [];
}

interface QuantityCartAction {
  type: ActionType.QUANTITY;
  payload: number;
}

interface ActiveCartAction {
  type: ActionType.ACTIVE;
  payload: boolean;
}

export type Action =
  | AddCartProductAction
  | RemoveCartProductAction
  | UpdateCartProductAction
  | ClearCartProductAction
  | QuantityCartAction
  | ActiveCartAction;
