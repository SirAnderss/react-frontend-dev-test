import { UserActionType } from 'state/action-types/userActionTypes';
import { Action } from 'state/actions/userAction';

const initalState = {
  user: null,
};

const reducer = (state = initalState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case UserActionType.SET:
      return { ...state, user: payload };

    case UserActionType.UNSET:
      return { ...state, user: payload };

    default:
      return state;
  }
};

export default reducer;
