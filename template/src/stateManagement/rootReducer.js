import { combineReducers } from 'redux';
import ApplicationBaseReducer from '../app/common/redux/reducers/applicationBaseReducer';

const RootReducer = combineReducers({
  ApplicationBaseReducer,
  // add new reducers
});

export default RootReducer;
