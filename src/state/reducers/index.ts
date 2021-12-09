import { combineReducers } from 'redux';
import cartReducer from 'state/reducers/cartReducer';
import userReducer from 'state/reducers/userReducer';

const reducers = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
