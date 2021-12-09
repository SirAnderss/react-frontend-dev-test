import { UserActionType } from 'state/action-types/userActionTypes';

interface SetUserAction {
  type: UserActionType.SET;
  payload: TUser;
}

interface UnsetUserAction {
  type: UserActionType.UNSET;
  payload: null;
}

export type Action = SetUserAction | UnsetUserAction;
