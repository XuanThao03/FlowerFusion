import {createStore, combineReducers, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {userLoginReducer, userRegisterReducer} from './Reducers/userReducers';
import { flowersReducer, selectedFlowerReducer } from './Reducers/flowerReducers';

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  flowers: flowersReducer, 
  selectedFlower: selectedFlowerReducer,
});


//login
const userInfoFromLocalStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const intialState = {
  userLogin: {userInfo: userInfoFromLocalStorage},
};

const middleware = [thunk];

const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
