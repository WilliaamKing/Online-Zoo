import {combineReducers} from 'redux';
import animals from './animals';
import locations from './locations'

const rootReducer = combineReducers({animals,locations});
export default rootReducer;