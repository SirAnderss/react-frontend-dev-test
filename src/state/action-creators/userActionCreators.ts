import { Dispatch } from 'redux';
import { UserActionType } from 'state/action-types/userActionTypes';
import { Action } from 'state/actions/userAction';

export const setUser =
  (user: TUser) =>
  (dispatch: Dispatch<Action>): void => {
    dispatch({
      type: UserActionType.SET,
      payload: user,
    });
  };

export const unSetUser =
  () =>
  (dispatch: Dispatch<Action>): void => {
    dispatch({
      type: UserActionType.SET,
      payload: null,
    });
  };
