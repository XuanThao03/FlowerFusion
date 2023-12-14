import {createStore, combineReducers, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {userLoginReducer, userRegisterReducer} from './Reducers/userReducers';
import { flowersReducer, selectedFlowerReducer } from './Reducers/flowerReducers';
import { candlesReducer, selectedCandleReducer } from './Reducers/candleReducers';
import { vasesReducer, selectedVaseReducer } from './Reducers/vaseReducers';
import { occasionsReducer, selectedOccasionReducer } from './Reducers/occasionReducers';

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  flowers: flowersReducer, 
  selectedFlower: selectedFlowerReducer,
  candles: candlesReducer, 
  selectedCandle: selectedCandleReducer,
  vases: vasesReducer, 
  selectedVase: selectedVaseReducer,
  occasions: occasionsReducer, 
  selectedOccasion: selectedOccasionReducer,
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
