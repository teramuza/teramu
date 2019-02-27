import { combineReducers } from 'redux';

// import todos from './todospath'
import auth from './auth'

const appReducer = combineReducers({
	//todos
	auth
});

export default appReducer;