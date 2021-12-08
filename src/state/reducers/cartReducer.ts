import { ActionType } from 'state/action-types/index';
import { Action } from 'state/actions';

const initalState = {
  shoppingCart: [],
  quantity: 10,
  active: false,
};

const reducer = (state = initalState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.ADD:
      return { ...state, shoppingCart: [...state.shoppingCart, payload] };

    case ActionType.UPDATE:
      return { ...state, shoppingCart: payload };

    case ActionType.REMOVE:
      return { ...state, shoppingCart: payload };

    case ActionType.CLEAR:
      return { ...state, shoppingCart: payload };

    case ActionType.QUANTITY:
      return { ...state, quantity: payload };

    case ActionType.ACTIVE:
      return { ...state, active: payload };

    default:
      return state;
  }
};

export default reducer;
