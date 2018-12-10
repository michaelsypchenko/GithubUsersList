import { combineReducers } from 'redux';
import api from './Api.reducer';
import users from './Users.reducer';

export const rootReducer = combineReducers({
    users,
    api
});
