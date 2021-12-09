import { CartActionType } from 'state/action-types/cartActionTypes';
import { Action } from 'state/actions/cartActions';

const initalState = {
  shoppingCart: [],
  quantity: 0,
  active: false,
};

const reducer = (state = initalState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case CartActionType.ADD:
      return { ...state, shoppingCart: [...state.shoppingCart, payload] };

    case CartActionType.UPDATE:
      return { ...state, shoppingCart: payload };

    case CartActionType.REMOVE:
      return { ...state, shoppingCart: payload };

    case CartActionType.CLEAR:
      return { ...state, shoppingCart: payload };

    case CartActionType.QUANTITY:
      return { ...state, quantity: payload };

    case CartActionType.ACTIVE:
      return { ...state, active: payload };

    default:
      return state;
  }
};

export default reducer;
